import mongoose from "mongoose";
import { restaurantSchema } from "@/app/lib/restaurentsModel";
import { connectionString } from "@/app/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
    await mongoose.connect(connectionString);
    const data = await restaurantSchema.find()
    console.log(data);
    return NextResponse.json({ result: data })

}
export async function POST(request) {
    let success = false;
    let payload = await request.json();
    let result;
    await mongoose.connect(connectionString)
    if (payload.login) {
        result = await restaurantSchema.findOne({ email: payload.email, password: payload.password })
        if(result){
            success = true;
        }
    } else {
        const restaurant = new restaurantSchema(payload);
        result = await restaurant.save();
        if(result){
            success = true;
        }
    }


    return NextResponse.json({ result , success })
}