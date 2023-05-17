import Head from "next/head";
import { userData } from "@/data";
import { useState } from "react";

const RepayLoan = () => {
  const [name, setName] = useState("");
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");

  const onHandleClick = (e) => {
    e.preventDefault();
    userData.push({
      name,
      amount,
      loanType,
    });
    setTimeout(() => alert("Repayment Successful"), 3000);
  };

  return (
    <>
      <Head>
        <title>Get Loan</title>
      </Head>
      <main className="flex flex-col items-center justify-center h-screen mt-4">
        <h1 className="text-4xl font-medium">Repay the loan</h1>
        <form className="mt-10 text-xl w-96 flex flex-col gap-4">
          <div className="flex justify-between">
            <label>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 outline-none focus:border-b-indigo-300"
            />
          </div>
          <div className="flex justify-between">
            <label>Loan Type</label>
            <select onChange={(e) => setLoanType(e.target.value)}>
              <option name="education" value="education">
                Education
              </option>
              <option name="personal" value="personal">
                Personal
              </option>
              <option name="car" value="car">
                Car
              </option>
            </select>
          </div>
          <div className="flex justify-between">
            <label>Amount (₹)</label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              min={0}
              type="number"
              className="border-b-2 outline-none focus:border-b-indigo-300"
            />
          </div>
          <button
            onClick={onHandleClick}
            className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600"
          >
            Repay Money
          </button>
        </form>
      </main>
    </>
  );
};

export default RepayLoan;
