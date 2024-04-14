import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { signupAction } from "./signupAction";

export default function Signup() {

  return (
    <div>
      <div>
        <div className="max-w-screen-lg mx-auto h-lvh flex flex-col items-center justify-center">
          <h1 className="pb-14 text-white font-bold text-3xl max-w-md text-center">Please Sign Up</h1>

          <form action={signupAction} className="w-80 p-8 border-2 text-black border-white rounded-2xl">

            <input
              className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500"
              type="text"
              placeholder="Username"
              name="user"
            />

            <input
              className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500"
              type="text"
              placeholder="Full Name"
              name="name"
            />

            <span>
              <input
                className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500"
                type="password"
                name="pass"
                placeholder="password"
              />
            </span>

            <input
              className="w-full mb-5 py-0.5 px-2 rounded-lg outline-2 outline-blue-500"
              type="email"
              name="email"
              placeholder='E-mail'
            />

            <div className="flex items-center justify-between">
              <input
                className="min-w-20 text-white border-2 border-blue-500 text-sm 
                  bg-blue-500 rounded-lg py-2 px-4 italic"
                type="submit"
                value="Sign up"
              />

              <span>or</span>

              <button>
                <GithubLogo size={40} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
