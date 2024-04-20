import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  try {
    const res = await prisma.savePost.upsert({
      where: {
        uid: body.uid,
      },
      update: {
        posts: { push: body.data.id },
      },
      create: {
        posts: [body.data.id],
        uid: body.uid,
      },
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
