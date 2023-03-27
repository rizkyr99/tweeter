import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import generateToken from '../utils/generateToken';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: String;
}

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const user = new User(req.body);

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

const followUser = asyncHandler(async (req: Request, res: Response) => {
  let token: string;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

      const user = await User.findByIdAndUpdate(
        decoded.id,
        { $push: { followings: req.params.id } },
        { new: true }
      );
      await User.findByIdAndUpdate(req.params.id, {
        $push: { followers: decoded.id },
      });

      res.json(user);
    } catch (error) {
      console.log(error);
      throw new Error('Token failed');
    }
  }

  if (!token) {
    throw new Error('No token');
  }
});

const unfollowUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    let token: string;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        const user = await User.findByIdAndUpdate(
          decoded.id,
          { $pull: { followings: req.params.id } },
          { new: true }
        );
        await User.findByIdAndUpdate(req.params.id, {
          $pull: { followers: decoded.id },
        });

        res.json(user);
      } catch (error) {
        console.log(error);
        throw new Error('Token failed');
      }
    }

    if (!token) {
      throw new Error('No token');
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

export { registerUser, loginUser, getUserById, followUser, unfollowUser };
