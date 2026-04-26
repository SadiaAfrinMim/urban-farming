import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getAllPosts = async () => {
  const posts = await prisma.communityPost.findMany({
    include: {
      user: true,
    },
    orderBy: {
      postDate: 'desc',
    },
  });
  return posts;
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

export const CommunityService = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};