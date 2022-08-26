import express from "express";
import {
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/User.js";

import { varifyToken } from "../middlewares/varifyToken.js";

const router = express.Router();

// update a User
router.put("/:id", varifyToken, updateUser);
// Delete a User
router.delete("/:id", varifyToken, deleteUser);
// Get a User
router.get("/find/:id", getUser);
// Subscribe the user
router.put("/sub/:id", varifyToken, subscribe);
// unsubscribe the user
router.put("/unsub/:id", varifyToken, unsubscribe);
// Like the video
// dislike the video

export default router;
