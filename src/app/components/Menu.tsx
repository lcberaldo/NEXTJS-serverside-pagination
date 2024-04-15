import { cookies } from "next/headers"
import MenuButton from "./MenuButton"
import Link from "next/link"

const Menu = () => {
  const isLoggedIn = cookies().get("Authorization")

  return (
    <div className="relative"  >

      {isLoggedIn ? <MenuButton /> : <Link href='login'>Login</Link>}
    </div>
  )
}

export default Menu
