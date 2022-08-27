import Comment from "../schemas/Comment.js";
import Video from "../schemas/Video.js";

export const addComment = async (req, res) => {
  try {
    const newComment = new Comment({ ...req.body, userId: req.user.id });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    res.send(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = Comment.findById(req.params.id);
    const video = Video.findById(req.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
    }else{
        res.send("You are not allowed to delete this comment...")
    }
  } catch (error) {
    res.send(error);
  }
};

export const getAllComment = async (req, res) => {
  try {
    const allComments = await Comment.find({ VideoId: req.params.videoId });
    res.json(allComments);
  } catch (error) {
    res.send(error);
  }
};
