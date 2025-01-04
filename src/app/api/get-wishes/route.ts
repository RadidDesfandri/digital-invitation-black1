import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET() {
  try {
    
    console.log("GETTING DATA");
    const messages = await prisma.messages.findMany();
    console.log("SUCCESS GETTING DATA", messages);

    return NextResponse.json(messages);
  } catch (error) {
    console.log(error, "ERROR_GET-WISHES");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
