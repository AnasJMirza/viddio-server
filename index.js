import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './src/routes/User.js'
import videoRoutes from './src/routes/Video.js'
import CommentRoutes from './src/routes/Comment.js'
import AuthRoutes from './src/routes/Auth.js'

// idk


// Database Connection file
import { connect } from './src/config/mongodb.js';

const app = express();
// app.use(cors({
    // credentials: true,
    // origin: "https://hosting-6adeb.firebaseapp.com",
    // origin: "http://localhost:3000",
// }));
// app.use(cors());
// const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
dotenv.config();




app.use('/api/auth', AuthRoutes);
app.use('/api/user', userRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/comment', CommentRoutes);
app.get('/', (req, res)=>{
    res.send("OKAY IM RUNNING")
})



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

// sakjdklsjad