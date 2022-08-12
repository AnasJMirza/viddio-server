import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './src/routes/User.js'
// import VideoRoutes from './src/routes/Video.js'
// import CommentRoutes from './src/routes/Comment.js'
import AuthRoutes from './src/routes/Auth.js'

// Database Connection file
import { connect } from './src/config/mongodb.js';


const app = express();
dotenv.config();


app.use(express.json())
app.use('/api/user', userRoutes);
// app.use('/api/video', VideoRoutes);
// app.use('/api/comment', CommentRoutes);
app.use('/api/auth', AuthRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});







const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    connect();
});