import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, attendance, message } = body;

    if (!name || !attendance || !message) {
      return new NextResponse("Required field", { status: 401 });
    }

    const newMessage = await prisma.messages.create({
      data: {
        name,
        message,
        attendance,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.log(error, "ERROR_WISHES");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
