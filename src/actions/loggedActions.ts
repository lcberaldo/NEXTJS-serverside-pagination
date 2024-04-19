import { Post } from "@/types";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getUserInfoAction(userId: number) {

  console.log(userId)

  const userInfo = await prisma.user.findFirst({
    where: {
      id: userId
    }
  })

  if (userInfo) {
    const { username, name, email, id } = userInfo
    return { username, name, email, id }
  }

  return ({ message: 'teste' })
}


export async function getAllUserPosts(userId: number) {

  const userPosts: Post[] = await prisma.post.findMany({
    where: {
      authorId: userId
    }
  })

  if (userPosts) return userPosts

  return []
}