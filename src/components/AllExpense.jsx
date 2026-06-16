import React, { useContext } from "react";
import { mainContext } from "../context/mainContextApi";

const AllExpense = () => {
  const { allExpense } = useContext(mainContext);

  const calculateMoney = (purpose) => {
    const expenses = allExpense.filter((item) => item.purpose === purpose);

    return expenses.reduce((total, item) => total + Number(item.price), 0);
  };

  const totalIncome = calculateMoney("income");
  const totalExpense = calculateMoney("expense");
  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Income Card */}
        <div
          className="w-[96%] lg:w-[80%] mx-auto py-5 px-4 rounded-lg
          border border-gray-300 shadow-sm"
        >
          <p className="font-bold text-2xl text-green-500">Income</p>

          <p className="text-3xl font-bold text-end text-green-600 mt-4">
            ₹ {totalIncome}
          </p>
        </div>

        {/* Expense Card */}
        <div
          className="w-[96%] lg:w-[80%] mx-auto py-5 px-4 rounded-lg
          border border-gray-300 shadow-sm"
        >
          <p className="font-bold text-2xl text-red-500">Expense</p>

          <p className="text-3xl font-bold text-end text-red-600 mt-4">
            ₹ {totalExpense}
          </p>
        </div>

        {/* Balance Card */}
        <div
          className="col-span-1 lg:col-span-2 py-5 px-4 rounded-lg
          border border-gray-300 shadow-sm"
        >
          <p className="font-bold text-3xl">
            <span className="text-red-500">Total </span>
            <span className="text-green-500">Balance</span>
          </p>

          <p
            className={`text-end font-bold text-3xl mt-4 ${
              totalBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹ {totalBalance}
          </p>
        </div>
      </div>
    </>
  );
};

export default AllExpense;
