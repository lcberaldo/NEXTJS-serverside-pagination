import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto h-lvh flex flex-col items-center justify-center">
        <h1 className="pb-14 text-white font-bold text-3xl max-w-md text-center">Welcome to my post aplication, please login:</h1>

        <form className="w-80 p-8 border-2 border-white rounded-2xl">
          <input className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500" type="text" placeholder="Username" name="user" />
          <input className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500" type="password" name="pass" id="" placeholder="password" />

          <div className="flex justify-between items-center mt-4">
            <input className="min-w-20 text-white border-2 border-green-500 text-sm bg-green-500 rounded-lg py-2 px-4 italic" type="submit" value="Login" />

            <Link className="min-w-20 text-blue-500 text-sm border-2 border-blue-500 rounded-lg py-2 px-4 italic" href='/signup'>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}




