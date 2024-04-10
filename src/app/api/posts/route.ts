import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fsPromises from 'fs/promises'
import { Post } from "@/types";

const postsFilePath = path.join(process.cwd(), 'public/mocks/posts.json')


export async function GET() {
  try {
    const posts = await fsPromises.readFile(postsFilePath, 'utf-8')
    const json = JSON.parse(posts)
    return NextResponse.json(json)

  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'No posts found' }), { status: 404, headers: { 'content-type': 'application/json' } })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const posts = await fsPromises.readFile(postsFilePath, 'utf-8')
    const jsonArray = JSON.parse(posts)


    const { id, title, body, image_url } = await req.json()



    const postIndex = jsonArray.findIndex((post: Post) => post.id === Number(id))


    if (postIndex < 0) {
      return new NextResponse(
        JSON.stringify({ message: 'post not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    let desiredPost = jsonArray[postIndex]


    desiredPost.id = id ? Number(id) : Number(desiredPost.id)
    desiredPost.title = title ? title : desiredPost.title
    desiredPost.body = body ? body : desiredPost.body
    desiredPost.image_url = image_url ? image_url : desiredPost.image_url


    jsonArray[postIndex] = desiredPost

    const updatedData = JSON.stringify(jsonArray)

    await fsPromises.writeFile(postsFilePath, updatedData)

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
    const posts = await fsPromises.readFile(postsFilePath, 'utf-8')
    const jsonArray = JSON.parse(posts)

    const { title, body, image_url } = await req.json()

    const id = Number(jsonArray.length) + 1

    jsonArray.push({ id, title, body, image_url })

    const updatedData = JSON.stringify(jsonArray)

    await fsPromises.writeFile(postsFilePath, updatedData)

    return new NextResponse(JSON.stringify({ message: "Post Created sucessfuly" }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new NextResponse(JSON.stringify(
      { message: "Error reading or parsing the JSON file" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const posts = await fsPromises.readFile(postsFilePath, 'utf-8')
    const jsonArray = JSON.parse(posts)

    const { id } = await req.json()

    const newJsonArray = jsonArray.filter((post: Post) => id !== post.id)

    const updatedData = JSON.stringify(newJsonArray)

    await fsPromises.writeFile(postsFilePath, updatedData)

    return new NextResponse(JSON.stringify({ message: "Post Deleted sucessfuly" }),
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