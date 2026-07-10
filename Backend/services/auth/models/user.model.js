import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    //basic info
    firebaseUid: {
        type: String,
        unique: true
    },
    name: String,
    email: String,
    avatar: String,
}, {

    //to get updatet at real time when the data get updated
    timestamps: true
})

const User = mongoose.model("User", userSchema);
export default User;