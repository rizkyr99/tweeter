import express, { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { protect } from '../middleware/authMiddleware';
import {
  createPost,
  deletePost,
  likePost,
  unlikePost,
} from '../controllers/postController';

const router = express.Router();

const storagePosts = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'tweeter/posts',
    };
  },
});

const uploadPost = multer({ storage: storagePosts });

router.post('', protect, uploadPost.single('image'), createPost);
router.put('/:id/like', protect, likePost);
router.put('/:id/unlike', protect, unlikePost);
router.delete('/:id', protect, deletePost);

export default router;
