import express from 'express';
import {
  followUser,
  getUserById,
  loginUser,
  registerUser,
  unfollowUser,
} from '../controllers/userController';

const router = express.Router();

// Register user
// POST / (private)
router.post('/', registerUser);
router.post('/login', loginUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

// GET /me (private)
// GET /:id (public)
router.get('/:id', getUserById);
// GET /:id/followers (private)
// GET /:id/followings (private)

router.get('/me');

export default router;
