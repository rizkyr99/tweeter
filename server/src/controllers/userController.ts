import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import generateToken from '../utils/generateToken';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: String;
}

interface IUserRequest extends Request {
  user: any;
}

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const user = new User(req.body);

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(400);
    throw new Error('Email has already registered');
  }

  await user.save();
  res.status(200).json({
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    token: generateToken(user._id),
  });
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      token: generateToken(user._id),
    });
  } else {
    throw new Error('Wrong username or password');
  }
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id);

  const {
    _id,
    email,
    firstName,
    lastName,
    picturePath,
    followers,
    followings,
  } = user;
  res.status(200).json({
    _id,
    email,
    fullName: `${firstName} ${lastName}`,
    picturePath,
    followers,
    followings,
  });
});

const followUser = asyncHandler(async (req: IUserRequest, res: Response) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $push: { followings: req.params.id } },
    { new: true }
  );
  await User.findByIdAndUpdate(req.params.id, {
    $push: { followers: req.user._id },
  });

  res.json(user);
});

const unfollowUser = asyncHandler(async (req: IUserRequest, res: Response) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $pull: { followings: req.params.id } },
    { new: true }
  );
  await User.findByIdAndUpdate(req.params.id, {
    $pull: { followers: req.user._id },
  });

  res.json(user);
});

export { registerUser, loginUser, getUserById, followUser, unfollowUser };
