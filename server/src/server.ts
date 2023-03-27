import express, { Application } from 'express';
import dotenv from 'dotenv';
import colors from '@colors/colors';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app: Application = express();

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storageUsers = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'tweeter/users',
    };
  },
});

const uploadUser = multer({ storage: storageUsers });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(colors.yellow(`Server running on port ${PORT}`));
});
