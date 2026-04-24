import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getAllPosts = async () => {
  const posts = await prisma.communityPost.findMany({
    include: {
      user: true,
      reports: true,
    },
    orderBy: {
      postDate: 'desc',
    },
  });
  return posts;
};

const getPostById = async (id: string) => {
  const post = await prisma.communityPost.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  return post;
};

const createPost = async (userId: string, payload: {
  postContent: string;
}) => {
  const post = await prisma.communityPost.create({
    data: {
      userId,
      ...payload,
    },
  });
  return post;
};

const updatePost = async (id: string, user: IJWTPayload, payload: Partial<{
  postContent: string;
}>) => {
  const post = await prisma.communityPost.findUnique({
    where: { id },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  if (post.userId !== user.id && user.role !== 'Admin') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }
  const updated = await prisma.communityPost.update({
    where: { id },
    data: payload,
  });
  return updated;
};

const deletePost = async (id: string, user: IJWTPayload) => {
  const post = await prisma.communityPost.findUnique({
    where: { id },
  });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  if (post.userId !== user.id && user.role !== 'Admin') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }
  await prisma.communityPost.delete({
    where: { id },
  });
};

export const CommunityService = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};