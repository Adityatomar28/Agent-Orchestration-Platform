import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const port = process.env.PORT || 8000;

const app = express()

//middleware
app.use("/auth",proxy(process.env.AUTH_SERVICE_URL))

app.listen(port,() => {
    console.log(`Gateway server is running on port ${port}`);
})