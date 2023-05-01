const { default: Head } = require("next/head")
import { FcGoogle } from "react-icons/fc";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Signin = () => {

    return (
      <>
        <Head>
          <title>Sign In</title>
        </Head>
        <main className="flex h-screen">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl font-medium">Welecome back</h2>
              <p>Welcome back! Please enter your details</p>
              <form className="flex flex-col gap-2 mt-4">
                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    className="p-2 outline-none border rounded"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Password</label>
                  <input
                    className="p-2 outline-none border rounded"
                    placeholder="********"
                    type="password"
                  />
                </div>
                <div className="flex gap-x-10">
                  <div className="flex gap-1">
                    <input type="checkbox" />
                    <label>Remember for 30 days</label>
                  </div>
                  <p className="text-[#7e56da]">Forget Password?</p>
                </div>
                <button className="bg-[#7e56da] p-3 rounded text-white">
                  Sign In
                </button>
                <button className="flex justify-center items-center gap-3 border-2 border-black border-solid p-2 rounded">
                  <FcGoogle />
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
          <div className="bg-[#f3f4f8] w-1/2  flex items-center justify-center">
            <div className="flex flex-col relative">
              <div className="bg-[#7e56da] w-44 h-44 rounded-full "></div>
              <div className="bg-white/30 backdrop-blur-sm absolute top-20 -right-6 w-96 h-44 blur-md"></div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Signin;