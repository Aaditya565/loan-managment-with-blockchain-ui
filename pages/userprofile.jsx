import Image from "next/image";

const { default: Head } = require("next/head")

import avatar from "../public/avatar.jpg"
import { FcSettings, FcApproval } from "react-icons/fc";
import {
  TbAlertCircle,
  TbBuildingBank,
  TbCoinRupee,
  TbDiscount,
  TbUser,
} from "react-icons/tb";

const UserProfile = () => {
    return (
      <>
        <Head>
          <title>User Profile</title>
        </Head>
        <main className="p-10 px-14 bg-slate-100 h-screen">
          <div className="flex justify-between items-center bg-white p-4 rounded">
            <div className="flex gap-8">
              <div className="w-20 rounded-full overflow-hidden">
                <Image src={avatar} alt="avatar" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-medium">Aaditya Kumar</h4>
                <p className="italic">aadikunal100@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-200 rounded-full p-2">
              <FcSettings className="text-3xl" />
            </div>
          </div>
          <div className="flex mt-6 gap-6">
            <div className="flex flex-col bg-white w-56  p-4 rounded">
              <ul className="flex flex-col gap-8 text-xl">
                <li className="flex items-center gap-2 p-2 rounded ">
                  <TbDiscount className="text-2xl" />
                  Credit Score
                </li>
                <li className="flex items-center gap-2 p-2  bg-[#7e56da] text-white rounded">
                  <TbUser className="text-2xl" />
                  Profile
                </li>
                <li className="flex items-center gap-2 p-2">
                  <TbCoinRupee className="text-2xl" /> Refer & Earn
                </li>
                <li className="flex items-center gap-2 p-2">
                  <TbBuildingBank className="text-2xl" /> Bank Account
                </li>
                <li className="flex items-center gap-2 p-2">
                  <TbAlertCircle className="text-2xl" /> Help
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 flex-1">
              <div className="flex gap-2">
                <div className="bg-[#d2c8eb] p-4 rounded text-xl flex items-center gap-2">
                  <FcApproval className="text-3xl" />
                  KYC Verified
                </div>
                <div className="bg-[#d2c8eb] p-4 rounded text-xl flex items-center gap-2 w-fit">
                  Wallet:
                  <p>miURu6aVVZYMpYBqAN8Gfz9YK7UvFLsKBs</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium">Active Loan</h3>
                <div className="flex justify-between rounded bg-slate-50 p-2">
                  <div>
                    <h4 className="font-medium">Personal Loan</h4>
                    <p className="italic">₹40,000</p>
                  </div>
                  <button className="bg-black text-white p-4 rounded">
                    Repay
                  </button>
                </div>
                <div className="flex justify-between rounded bg-slate-50 p-2">
                  <div>
                    <h4 className="font-medium">Car Loan</h4>
                    <p className="italic">₹25,00,000</p>
                  </div>
                  <button className="bg-black text-white p-4 rounded">
                    Repay
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium">Completed Loan</h3>
                <div className="flex justify-between rounded bg-slate-50 p-2">
                  <div>
                    <h4 className="font-medium">Education Loan</h4>
                    <p className="italic">₹8,00,000</p>
                  </div>
                  <button className="bg-black text-white p-4 rounded">
                    Repay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default UserProfile;