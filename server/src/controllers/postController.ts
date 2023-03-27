import { Request, Response } from 'express';
import AsyncHandler from 'express-async-handler';
import Post from '../models/postModel';

const createPost = AsyncHandler(async (req: Request, res: Response) => {
  const post = new Post(req.body);

  await post.save();

  res.status(201).json(post);
});

export { createPost };
