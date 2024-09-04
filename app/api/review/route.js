import Rating from '@models/rating';
import { connectToDB } from '@utils/database';
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        await connectToDB();
        console.log("hello")
        const data = await req.json();
        console.log("Data received:", data);
        const { email, name: username, image, message, rating } = data;

        console.log("Parsed email:", username);
        console.log("Creating new entry...");
        const newcreate = await Rating.create({
            email: email,
            username: username,
            image: image,
            message: message,
            rating: rating,
        })
        console.log(newcreate);
        await newcreate.save();
        return NextResponse.json(newcreate, {
            status: 200,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDB();
        const ratings = await Rating.find({});

        return NextResponse.json({ ratings }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}