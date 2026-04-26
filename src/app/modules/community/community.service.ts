import { prisma } from '../../shared/prisma';

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
    },
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
  });
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
    return { liked: false };
  } else {
    // Like the post
    await prisma.postLike.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
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