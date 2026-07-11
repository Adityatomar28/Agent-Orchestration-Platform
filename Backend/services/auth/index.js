import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";
dotenv.config();

const port = process.env.PORT || 8001;

const app = express()
app.use(express.json())
app.use("/", router)

app.get("/", (req, res) => {
    res.send("AUTH service is running")
})

app.listen(port, () => {
    console.log(`AUTH server is running on port ${port}`)
    connectDB()
})