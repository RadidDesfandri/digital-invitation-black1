import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(req: Request) {
  try {
    const messages = await prisma.messages.findMany();

    return NextResponse.json(messages);
  } catch (error) {
    console.log(error, "ERROR_GET-WISHES");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
