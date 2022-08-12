import mongoose from "mongoose";

const CommnetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    VideoId: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);


export default mongoose.model('Comment', CommnetSchema);