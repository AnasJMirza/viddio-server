import mongoose from "mongoose";
import UserSchema from "../schemas/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserSchema({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User Created Successfully...")
  } catch (error) {
    next(error)
  }
};
