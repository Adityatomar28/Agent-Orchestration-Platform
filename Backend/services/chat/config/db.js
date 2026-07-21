import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error while connecting with DB", error.message);
    }
}

export default connectDB;