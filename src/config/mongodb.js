import mongoose from "mongoose";


export const connect = () => {
    mongoose.connect(process.env.DB)
    .then(console.log("Connected to database succesfully"))
    .catch((err) => {
        throw err;
    });
};

