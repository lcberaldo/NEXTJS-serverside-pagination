import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Post } from "@/types";

const prisma = new PrismaClient()


export async function GET() {
  const posts = await prisma.post.findMany()

  return new NextResponse(JSON.stringify(posts))

}

export async function PATCH(req: NextRequest) {
  try {

    const data: Post = await req.json()

    const { title, image_url, content, id } = data


    const idAsANumber = Number(id)

    const updatePost = await prisma.post.update({
      where: {
        id: idAsANumber,
      },
      data: {
        title: title || undefined,
        content: content || undefined,
        image_url: image_url || undefined
      },
    })

    return new NextResponse(JSON.stringify({ message: "Post patched sucessfuly" }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new NextResponse(JSON.stringify(
      { message: "Error reading or parsing the JSON file" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function POST(req: NextRequest) {
  try {

    const data = await req.json();
    const { title, content, image_url } = data

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image_url
      },
    })

    return new NextResponse(JSON.stringify(post))

  } catch (error) {
    return new NextResponse(JSON.stringify(
      { message: "Error connecting the database" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function DELETE(req: NextRequest) {
  try {

    const data = await req.json()
    const { id } = data


    const idAsNumber = Number(id)

    const deleteUser = await prisma.post.delete({
      where: {
        id: idAsNumber
      },
    })

    return new NextResponse(JSON.stringify({ message: "Post Deleted sucessfuly" }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new NextResponse(JSON.stringify(
      { message: "Error connecting the database" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}