import { cookies } from "next/headers";
import { CardContainer } from "../components/CardContainer";
import Menu from "../components/Menu";
import { getAllUserPosts } from "@/actions/loggedActions";




export default async function MyPosts() {
  const userId = Number(cookies().get('SessionId')?.value)

  if (!userId) return

  const userPosts = await getAllUserPosts(userId)


  return (

    <div className="mx-auto max-w-5xl py-10">
      <Menu>My Posts ❤️</Menu>

      <CardContainer entries={userPosts} />
    </div>
  )
}
