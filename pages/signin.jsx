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
                <div className="flex flex-col">
                  <label>Email</label>
                  <input placeholder="Enter your email" type="email" />
                </div>
                <div className="flex flex-col">
                  <label>Password</label>
                  <input placeholder="********" type="password" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label>Remember for 30 days</label>
                  </div>
                  <p>Forget Password?</p>
                </div>
                <button className="bg-[#7e56da] p-3 rounded text-white">Sign In</button>
                <button className="flex justify-center items-center gap-3 border-2 border-black border-solid p-2 rounded">
                  <FcGoogle />
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
          <div className="bg-black w-1/2"></div>
        </main>
      </>
    );
}

export default Signin;