import express, { Application } from 'express';
import dotenv from 'dotenv';
import colors from '@colors/colors';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorMiddleware';
import Post from './models/postModel';
import expressAsyncHandler from 'express-async-handler';

dotenv.config();

const app: Application = express();

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storagePosts = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'tweeter/posts',
    };
  },
});

const storageUsers = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'tweeter/users',
    };
  },
});

const uploadPost = multer({ storage: storagePosts });
const uploadUser = multer({ storage: storageUsers });

app.post(
  '/api/posts',
  uploadPost.single('image'),
  expressAsyncHandler(async (req, res) => {
    const post = new Post({
      content: req.body.content,
      author: '6420dd36fbcc40c4a87efed5',
    });

    if (req.file) {
      post.image = req.file.path;
    }

    await post.save();
    res.status(201).json(post);
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/api/users', userRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(colors.yellow(`Server running on port ${PORT}`));
});
