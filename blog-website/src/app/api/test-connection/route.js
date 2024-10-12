import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export async function GET() {
    console.log("Get request received");
    await dbConnect();
    return NextResponse.json({
        success: true,
        message: "Mongodb connection Successful!"
    }, { status: 200 });
    
}