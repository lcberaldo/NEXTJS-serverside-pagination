import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type GetUserParams = {
  params: {
    userId: string
  }
}

export async function GET(req: NextRequest, { params }: GetUserParams) {

  try {
    const id = Number(params.userId)

    const user = await prisma.user.findUnique({
      where: {
        id
      },
    })

    return new NextResponse(JSON.stringify(user))
  } catch (error) {
    return new NextResponse(JSON.stringify({ Erro: error }))
  }
}