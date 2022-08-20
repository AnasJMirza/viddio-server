import express from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/User.js';

import { varifyToken } from '../middlewares/varifyToken.js';

const router = express.Router();

// update a User
router.put('/:id', varifyToken, updateUser);
// Delete a User
router.delete('/:id', varifyToken, deleteUser);
// Get a User
router.get('/:id', getUser);
// Subscribe the user
// unsubscribe the user
// Like the video
// dislike the video

export default router;