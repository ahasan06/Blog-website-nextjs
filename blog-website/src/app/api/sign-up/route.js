import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await dbConnect();
        const reqBody = await request.json();
        console.log("Post request for signup", reqBody);
        const { name, email, password } = reqBody;

        // If email is found
        const existingUserbyEmail = await UserModel.findOne({ email });

        // If email is already taken
        if (existingUserbyEmail) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A user with this email already exists. Try with another email.",
                },
                { status: 400 }
            );
        }

        // Create a new user if email and username are not already used
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({ // Use 'new' to create an instance
            name,
            email,
            password: hashPassword
        });

        const savedUser = await newUser.save();

        return NextResponse.json(
            {
                success: true,
                user: savedUser, // Change newUser to savedUser
                message: "User registered successfully!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error registering user", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error registering user",
                error: error.message // Provide error details for debugging
            },
            { status: 500 }
        );
    }
}
