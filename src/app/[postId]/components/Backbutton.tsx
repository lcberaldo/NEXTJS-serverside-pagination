'use client'

import { ArrowBendDownLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"



const Backbutton = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      <ArrowBendDownLeft size={30} />
    </button>
  )
}

export default Backbutton
