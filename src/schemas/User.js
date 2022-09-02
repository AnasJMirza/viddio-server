import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      
    },

    img: {
      type: String,
    },

    fromGoogle: {
      type: Boolean,
      default: false
    },

    subscribers: {
      type: Number,
      default: 0,
    },

    subscribedUsers: {
      type: [String],
    },
  },
  { timestampes: true }
);

export default mongoose.model('User', UserSchema);