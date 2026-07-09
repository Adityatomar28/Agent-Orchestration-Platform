import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 8000;

const app = express()

app.get("/",(req,res) => {
    res.send("AUTH service is running")
})

app.listen(port,() => {
    console.log(`AUTH server is running on port ${port}`)
    connectDB()
})