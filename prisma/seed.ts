
import { PrismaClient } from "@prisma/client"
import { posts } from "./posts"

const prisma = new PrismaClient()

async function load() {
  await prisma.post.createMany({ data: posts })
}

load().catch(e => {
  console.log(e)
}).finally(() => {
  prisma.$disconnect()
})

