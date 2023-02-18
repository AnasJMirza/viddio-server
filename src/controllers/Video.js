import User from "../schemas/User.js";
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
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(updatedVideo);
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
    res.json(video);
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

export const random = async (req, res) => {
    // $sample is used to collect random videos here...
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.json(videos);
  } catch (error) {
    res.send(error);
  }
};

export const trending = async (req, res) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.json(videos);
  } catch (error) {
    res.send(error);
  }
};

export const sub = async (req, res) => {
  try {
    const user = await User.findById(res.user.id);
    if (!user) return res.send("User not found");

    const subscribedChannels = await User.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );

    res.json(list);
  } catch (error) {
    res.send(error);
  }
};

export const getTags = async (req, res) => {
    // here $in is used to check the array if it is matching with something
  try {
    
    const tags = req.query.tags.split(",");
    const videos = await Video.find({tags : {$in: tags}}).limit(20);
    res.json(videos);
  } catch (error) {
    res.send(error);
  }
};

export const search = async (req, res) => {
    // regex is used to match two values. here it is mathing the query with title of the video
    try {
        const query = req.query.q;
        const videos = await Video.find({title: {$regex: query, $options: "i"}});
        res.json(videos)
    } catch (error) {
        res.send(error)
    }
}
