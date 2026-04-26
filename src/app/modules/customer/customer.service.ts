import { prisma } from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';

const getCustomerPosts = async (userId: string) => {
  const posts = await prisma.customerPost.findMany({
    where: {
      userId: parseInt(userId),
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
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Add computed fields
  return posts.map(post => ({
    ...post,
    likeCount: post.likes.length,
    commentCount: post.comments.length,
  }));
};

const createCustomerPost = async (userId: string, payload: {
  title: string;
  content: string;
  category: string;
}) => {
  const { title, content, category } = payload;

  // Validate required fields
  if (!title || !content || !category) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Title, content, and category are required');
  }

  // Validate category
  const validCategories = ['Question', 'Discussion', 'Review', 'Suggestion'];
  if (!validCategories.includes(category)) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Invalid category. Valid categories are: ${validCategories.join(', ')}`);
  }

  const post = await prisma.customerPost.create({
    data: {
      userId: parseInt(userId),
      title,
      content,
      category: category as any,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return post;
};

const updateCustomerPost = async (postId: string, userId: string, payload: Partial<{
  title: string;
  content: string;
  category: string;
}>) => {
  const post = await prisma.customerPost.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer post not found');
  }

  // Check if the post belongs to the user
  if (post.userId !== parseInt(userId)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You can only update your own posts');
  }

  // Validate category if provided
  if (payload.category) {
    const validCategories = ['Question', 'Discussion', 'Review', 'Suggestion'];
    if (!validCategories.includes(payload.category)) {
      throw new ApiError(httpStatus.BAD_REQUEST, `Invalid category. Valid categories are: ${validCategories.join(', ')}`);
    }
  }

  const updatedPost = await prisma.customerPost.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      ...payload,
      updatedAt: new Date(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return updatedPost;
};

const deleteCustomerPost = async (postId: string, userId: string) => {
  const post = await prisma.customerPost.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer post not found');
  }

  // Check if the post belongs to the user
  if (post.userId !== parseInt(userId)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You can only delete your own posts');
  }

  await prisma.customerPost.delete({
    where: {
      id: parseInt(postId),
    },
  });
};

const getCustomerDashboard = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      profileImage: true,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Get user's posts count
  const postsCount = await prisma.customerPost.count({
    where: { userId: parseInt(userId) },
  });

  // Get user's orders count
  const ordersCount = await prisma.order.count({
    where: { userId: parseInt(userId) },
  });

  return {
    user,
    stats: {
      postsCount,
      ordersCount,
    },
    recentPosts: await prisma.customerPost.findMany({
      where: { userId: parseInt(userId) },
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        category: true,
        isApproved: true,
        createdAt: true,
      },
    }),
  };
};

const getCustomerOrders = async (userId: string) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: parseInt(userId),
    },
    include: {
      orderItems: {
        include: {
          produce: {
            include: {
              vendor: {
                select: {
                  farmName: true,
                  user: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return orders;
};

const toggleCustomerPostLike = async (postId: string, userId: string) => {
  const post = await prisma.customerPost.findUnique({
    where: { id: parseInt(postId) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer post not found');
  }

  // Check if user already liked the post
  const existingLike = await prisma.customerPostLike.findUnique({
    where: {
      userId_postId: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    },
  });

  if (existingLike) {
    // Unlike the post
    await prisma.customerPostLike.delete({
      where: { id: existingLike.id },
    });
    return { liked: false };
  } else {
    // Like the post
    await prisma.customerPostLike.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });
    return { liked: true };
  }
};

const addCustomerPostComment = async (postId: string, userId: string, content: string) => {
  const post = await prisma.customerPost.findUnique({
    where: { id: parseInt(postId) },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer post not found');
  }

  if (!content.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Comment content cannot be empty');
  }

  const comment = await prisma.customerPostComment.create({
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

const getCustomerPostComments = async (postId: string) => {
  const comments = await prisma.customerPostComment.findMany({
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

const deleteCustomerPostComment = async (commentId: string, userId: string) => {
  const comment = await prisma.customerPostComment.findUnique({
    where: { id: parseInt(commentId) },
  });

  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }

  if (comment.userId !== parseInt(userId)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You can only delete your own comments');
  }

  await prisma.customerPostComment.delete({
    where: { id: parseInt(commentId) },
  });
};

export const CustomerService = {
  getCustomerPosts,
  createCustomerPost,
  updateCustomerPost,
  deleteCustomerPost,
  getCustomerDashboard,
  getCustomerOrders,
  toggleCustomerPostLike,
  addCustomerPostComment,
  getCustomerPostComments,
  deleteCustomerPostComment,
};