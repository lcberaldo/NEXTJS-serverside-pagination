import { cookies } from "next/headers"
import MenuButton from "./MenuButton"
import Link from "next/link"
import React, { ReactNode } from "react"
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn"

type MenuProps = {
  children: ReactNode
}

export default function Menu({ children }: MenuProps) {
  const isLoggedIn = cookies().get("Authorization")

  return (
    <div className="header flex items-center mb-20 justify-between">

      <h1 className="text-white text-4xl  font-bold text-center">
        {children}
      </h1>

      {isLoggedIn ?
        <MenuButton /> :
        <Link className="flex gap-2" href='login'>
          <SignIn size={25} color="white" />
          <span>Login</span>
        </Link>
      }
    </div>
  )
}

