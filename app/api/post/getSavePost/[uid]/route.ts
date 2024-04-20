import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { uid: string } }
) {
  try {
    const ids = await prisma.savePost.findUnique({
      where: { uid: params.uid },
    });

    const res = await prisma.posts.findMany({
      where: { id: { in: ids?.posts } },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
