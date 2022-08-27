import express from "express";
import {
  addComment,
  deleteComment,
  getAllComment,
} from "../controllers/Comment.js";
import { varifyToken } from "../middlewares/varifyToken.js";

const router = express.Router();

router.post("/", varifyToken, addComment);
router.delete("/:id", varifyToken, deleteComment);
router.get("/:videoId", varifyToken, getAllComment);

export default router;
