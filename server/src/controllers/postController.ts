import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Post from '../models/postModel';

interface IUserRequest extends Request {
  user: any;
}

const createPost = asyncHandler(async (req: IUserRequest, res: Response) => {
  const post = new Post({
    content: req.body.content,
    author: req.user._id,
  });

  if (req.file) {
    post.image = req.file.path;
  }

  await post.save();
  res.status(201).json(post);
});

const likePost = asyncHandler(async (req: IUserRequest, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new Error('Post not found');
  }

  await post.updateOne({ $push: { likes: req.user._id } });

  res.status(200).json(post);
});

const unlikePost = asyncHandler(async (req: IUserRequest, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new Error('Post not found');
  }

  await post.updateOne({ $pull: { likes: req.user._id } });

  res.status(200).json(post);
});

const deletePost = asyncHandler(async (req: IUserRequest, res: Response) => {
  const post = await Post.findById(req.params.id);
  console.log(req.user._id, post.author);

  if (!post) {
    throw new Error('Post not found');
  }

  if (!req.user._id.equals(post.author)) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await post.deleteOne();

  res.status(200).json(post);
});

export { createPost, likePost, unlikePost, deletePost };
