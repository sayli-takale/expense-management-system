import React, { useContext } from "react";
import ExpenseCard from "./ExpenseCard";
import { mainContext } from "../context/mainContextApi";

const ListExpense = () => {
  const { allExpense } = useContext(mainContext);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 table-auto my-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 py-3 px-2">No</th>
            <th className="border border-gray-300 py-3 px-2">Price</th>
            <th className="border border-gray-300 py-3 px-2 hidden lg:table-cell">
              Description
            </th>
            <th className="border border-gray-300 py-3 px-2">Purpose</th>
            <th className="border border-gray-300 py-3 px-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {allExpense.length > 0 ? (
            allExpense.map((expense, index) => (
              <ExpenseCard key={expense.id} data={expense} no={index + 1} />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-5 text-gray-500">
                No Expenses Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpense;
