import { prisma } from '../../shared/prisma';
import { NotificationService } from '../notification/notification.service';
import { NotificationType, UserRole } from '@prisma/client';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getAllPosts = async () => {
  const posts = await prisma.communityPost.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      likes: {
        select: {
          id: true,
          userId: true,
        },
      },
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
    orderBy: {
      postDate: 'desc',
    },
  });

  // Add computed fields
  return posts.map(post => ({
    ...post,
    likeCount: post.likes.length,
    commentCount: post.comments.length,
  }));
};

const getPostById = async (id: string) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: true,
    },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  return post;
};

const createPost = async (userId: number, payload: {
  postContent: string;
}) => {
  const post = await prisma.communityPost.create({
    data: {
      userId,
      postContent: payload.postContent,
      isApproved: false, // Posts need admin approval
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      likes: {
        select: {
          id: true,
          userId: true,
        },
      },
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  });

  const postWithCounts = {
    ...post,
    likeCount: post.likes.length,
    commentCount: post.comments.length,
  };

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('community-post-created', postWithCounts);
  }

  // Notify admins about new post for moderation (async, non-blocking)
  process.nextTick(async () => {
    try {
      const NotificationService = (await import('../notification/notification.service')).NotificationService;
      const admins = await prisma.user.findMany({
        where: { role: UserRole.Admin },
      });

      for (const admin of admins) {
        await NotificationService.createNotification(
          admin.id,
          'SYSTEM' as any,
          'New Post for Moderation',
          `New community post by ${post.user.name} needs approval.`,
          {
            postId: post.id,
            postContent: post.postContent.substring(0, 100) + '...',
            authorId: post.userId,
            authorName: post.user.name,
            type: 'post_moderation',
          }
        );
      }
    } catch (error) {
      console.error('Failed to create post moderation notification:', error);
    }
  });

  return post;
};

const updatePost = async (id: string, user: IJWTPayload, payload: Partial<{
  postContent: string;
}>) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: parseInt(id) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  if (post.userId !== parseInt(user.id) && user.role !== 'Admin') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }
  const updated = await prisma.communityPost.update({
    where: { id: parseInt(id) },
    data: {
      postContent: payload.postContent,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      likes: {
        select: {
          id: true,
          userId: true,
        },
      },
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  });

  const updatedWithCounts = {
    ...updated,
    likeCount: updated.likes.length,
    commentCount: updated.comments.length,
  };

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('community-post-updated', updatedWithCounts);
  }

  return updated;
};

const deletePost = async (id: string, user: IJWTPayload) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: parseInt(id) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  if (post.userId !== parseInt(user.id) && user.role !== 'Admin') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }
  await prisma.communityPost.delete({
    where: { id: parseInt(id) },
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('community-post-deleted', { id });
  }
};

const toggleLike = async (postId: string, userId: string) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: parseInt(postId) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  // Check if user already liked the post
  const existingLike = await prisma.postLike.findUnique({
    where: {
      userId_postId: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    },
  });

  if (existingLike) {
    // Unlike the post
    await prisma.postLike.delete({
      where: { id: existingLike.id },
    });

    // Emit real-time update
    const io = (global as any).io;
    if (io) {
      io.emit('community-post-unliked', { postId, userId });
    }

    return { liked: false };
  } else {
    // Like the post
    await prisma.postLike.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });

    // Emit real-time update
    const io = (global as any).io;
    if (io) {
      io.emit('community-post-liked', { postId, userId });
    }

    // Create notification for post author (if not the same user) (async, non-blocking)
    process.nextTick(async () => {
      try {
        const NotificationService = (await import('../notification/notification.service')).NotificationService;
        const post = await prisma.communityPost.findUnique({
          where: { id: parseInt(postId) },
          include: { user: true },
        });

        if (post && post.userId !== parseInt(userId)) {
          const liker = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
            select: { name: true },
          });

          await NotificationService.createNotification(
            post.userId,
            'COMMUNITY_POST_LIKE' as any,
            'Post Liked',
            `${liker?.name || 'Someone'} liked your post.`,
            {
              postId: postId,
              likerId: userId,
              likerName: liker?.name,
              postContent: post.postContent.substring(0, 50) + '...',
            }
          );
        }
      } catch (error) {
        console.error('Failed to create like notification:', error);
      }
    });

    return { liked: true };
  }
};

const addComment = async (postId: string, userId: string, content: string) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: parseInt(postId) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  if (!content.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Comment content cannot be empty');
  }

  const comment = await prisma.postComment.create({
    data: {
      userId: parseInt(userId),
      postId: parseInt(postId),
      content: content.trim(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('community-comment-added', { postId, comment });
  }

  // Create notification for post author (if not the same user) (async, non-blocking)
  process.nextTick(async () => {
    try {
      const NotificationService = (await import('../notification/notification.service')).NotificationService;
      const post = await prisma.communityPost.findUnique({
        where: { id: parseInt(postId) },
        include: { user: true },
      });

      if (post && post.userId !== parseInt(userId)) {
        const commenter = await prisma.user.findUnique({
          where: { id: parseInt(userId) },
          select: { name: true },
        });

        await NotificationService.createNotification(
          post.userId,
          'COMMUNITY_POST_COMMENT' as any,
          'New Comment',
          `${commenter?.name || 'Someone'} commented on your post.`,
          {
            postId: postId,
            commentId: comment.id,
            commenterId: userId,
            commenterName: commenter?.name,
            commentContent: comment.content,
            postContent: post.postContent.substring(0, 50) + '...',
          }
        );
      }
    } catch (error) {
      console.error('Failed to create comment notification:', error);
    }
  });

  return comment;
};

const getPostComments = async (postId: string) => {
  const comments = await prisma.postComment.findMany({
    where: { postId: parseInt(postId) },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  return comments;
};

const deleteComment = async (commentId: string, userId: string) => {
  const comment = await prisma.postComment.findUnique({
    where: { id: parseInt(commentId) },
  });

  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }

  if (comment.userId !== parseInt(userId)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You can only delete your own comments');
  }

  await prisma.postComment.delete({
    where: { id: parseInt(commentId) },
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('community-comment-deleted', { commentId, postId: comment.postId });
  }
};

export const CommunityService = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  toggleLike,
  addComment,
  getPostComments,
  deleteComment,
};