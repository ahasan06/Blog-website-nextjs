import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "username is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        designation: {
            type: String,
            default: "User", 
        },
        avatar: {
            type: Object,
            default: {},
        },
        age: {
            type: String,
            default: "Unknown",
        },
        location: {
            type: String,
            default: "Not specified", 
        },
        about: {
            type: String,
            default: "No description provided.", 
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'], 
            default: 'Other' // Default value
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default UserModel;
