import Video from "../schemas/Video.js";

export const addVideo = async (req, res) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    res.send(error);
  }
};

export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video)
      return res.status(404).send("Video with this ID does not exist...");

    if (req.user.id === video.userId) {
      const updatedVideo = Video.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(updateVideo);
    } else {
      return res.status(404).send("You can only update your video");
    }
  } catch (error) {
    res.send(error);
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.send("Video not found!...");
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.send("Video deleted Successfully...");
    } else {
      return res.send("You can only delete your own video");
    }
  } catch (error) {
    res.send(error);
  }
};

export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
  } catch (error) {
    res.send(error);
  }
};

export const addViews = async (req, res) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.send("Video view is increased by 1");
  } catch (error) {
    res.send(error);
  }
};
