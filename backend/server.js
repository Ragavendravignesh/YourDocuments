import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("Hey, you have made a get request!");
});

app.listen(5000, () => {
    console.log("Server is running at port 5000")
});