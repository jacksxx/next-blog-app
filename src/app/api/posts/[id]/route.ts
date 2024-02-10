import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.error();
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await request.json();
    const { title, image, description, tags } = body;

    const { id } = params;

    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        image,
        description,
        tags,
      },
    });

    if (!updatePost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatePost);
  } catch (err) {
    return NextResponse.error();
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    await prisma.post.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (err) {
    return NextResponse.error();
  }
};
