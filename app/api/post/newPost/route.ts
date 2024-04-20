import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const res = await req.json();
  const body = res;

  try {
    const res = await prisma.posts.create({
      data: body,
    });

    console.log(res);

    if (res) {
      return NextResponse.json({ ok: "success" }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
