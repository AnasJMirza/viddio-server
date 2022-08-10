import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// Database Connection file
import { connect } from './src/config/mongodb.js';


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    connect();
});