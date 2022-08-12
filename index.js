import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './src/routes/User.js'

// Database Connection file
import { connect } from './src/config/mongodb.js';


const app = express();
dotenv.config();


app.use('/api/user', userRoutes);







const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    connect();
});