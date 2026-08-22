import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest){
    try{   
        const{name, email, password} = await req.json()
        
        PrismaClient().catch(err => NextResponse.json(err))
    } catch{

    }
}