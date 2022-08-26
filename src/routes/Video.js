import express from 'express';
import { addVideo, addViews, deleteVideo, getVideo, random, sub, trending, updateVideo } from '../controllers/Video.js';
import { varifyToken } from '../middlewares/varifyToken.js';

const router = express.Router();

router.post('/', varifyToken, addVideo);
router.put('/:id', varifyToken, updateVideo);
router.delete('/:id', varifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addViews);
router.get('/random', random);
router.get('/trend', trending);
router.get('/sub', varifyToken , sub);

export default router;