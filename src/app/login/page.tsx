'use client'
import Link from "next/link"
import { loginAction } from "../../actions/loginAction";
import { useState } from "react";


export default function Home() {
  const [isError, setIsError] = useState('')

  async function handleSignIn(e: FormData) {
    const res = await loginAction(e)

    if (res.message) {
      setIsError(res.message)
    }
  }

  return (
    <div>
      <div className="max-w-screen-lg mx-auto h-lvh flex flex-col items-center justify-center">
        <h1 className="pb-14 text-white font-bold text-3xl max-w-md text-center">Welcome to my post aplication, please login:</h1>

        <form action={handleSignIn} className="w-80 p-8 border-2 border-white rounded-2xl">
          <input className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500 text-black" type="text" placeholder="Username" name="user" />
          <input className="w-full  py-0.5 px-2 rounded-lg outline-2 outline-blue-500 text-black" type="password" name="pass" id="" placeholder="password" />

          <p className="text-xs text-white mt-2 text-center">{isError ? isError : <br />}</p>

          <span className="flex justify-between items-center mt-4">
            <input className="min-w-20 text-white border-2 border-green-500 text-sm bg-green-500 rounded-lg py-2 px-4 italic" type="submit" value="Login" />

            <Link className="min-w-20 text-blue-500 text-sm border-2 border-blue-500 rounded-lg py-2 px-4 italic" href='/signup'>Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  )
}




