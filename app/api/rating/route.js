import Rating from '@models/rating';
import { connectToDB } from '@utils/database';
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(){
    try{
        await connectToDB();
        const session = await getServerSession(options);
        const data = await req.formData();
        let email = data.get("email");
        let username=data.get("name");
        let image=data.get("image");
        let message=data.get("message");
        let rating=data.get("rating");

        const newcreate=await Rating.create({
            email,
            username,
            image,
            message,
            rating,
        })

        await newcreate.save();
         return NextResponse.json({result:{newcreate}},{
            status:200
         })

    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
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