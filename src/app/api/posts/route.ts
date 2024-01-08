// url: http://localhost:3000/api/posts

import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.error();
  }
};
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { title, image, description, tags } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        image,
        description,
        tags,
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.error();
  }
};
