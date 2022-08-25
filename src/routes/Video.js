import express from 'express';
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/Video.js';
import { varifyToken } from '../middlewares/varifyToken.js';

const router = express.Router();

router.post('/', varifyToken, addVideo);
router.put('/:id', varifyToken, updateVideo);
router.delete('/:id', varifyToken, deleteVideo);
router.get('/find/:id', varifyToken, getVideo);