import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();

const port = process.env.PORT || 8000;

const app = express()
app.use(cors({
    origin: [
        process.env.FRONTEND_URL
    ],
    credentials: true
}))

app.use(cookieParser())

//middleware
app.use("/auth", proxy(process.env.AUTH_SERVICE_URL))

app.listen(port, () => {
    console.log(`Gateway server is running on port ${port}`);
})