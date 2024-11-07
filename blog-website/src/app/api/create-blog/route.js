import { dbConnect } from "@/lib/dbConnect";
import BlogModel from "@/models/Blog";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect()
        const session = await getServerSession(authOptions)
        console.log("Session found : ",session);
        
        if (!session || !session.user) {

            return NextResponse.json(
                { message: 'User is not authenticated' },
                { status: 401 }
            );

        }

        // get data from json
        const reqBody = await req.json()  
        console.log("Create blog",reqBody);
        const { title, description, excerpt, category,qoute, image } = reqBody;
        if (!reqBody) {
            return NextResponse.json(
                { message: 'Fields are required!' },
                { status: 400 }
            );
        }

        const newBlog = new BlogModel({
            title,
            description,
            excerpt,
            category,
            qoute,
            image,
            authorId: session.user.id,
        })
        await newBlog.save();

        return NextResponse.json(
            {
                message: 'Blog created successfully',
                blog: newBlog,
            },
            { status: 200 }
        )


    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json(
            { message: 'Server error. Please try again later.' },
            { status: 500 }
        );
    }
}