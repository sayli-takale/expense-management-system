import React, {useContext} from "react"
import { mainContext } from "../context/mainContextApi";
import Swal from "sweetalert2"
import UpdateExpense from "./UpdateExpense";

const ExpenseCard = ({data, no}) => {

    const {allExpense,setAllExpense} = useContext(mainContext)
    const deleteExpense = ()=>{
        const new_expense = allExpense.filter((cur,i)=>cur.id
        !=data.id)
        setAllExpense(new_expense)
        

        Swal.fire({
          title: "Success!",
          text: "Expense Deleted",
          icon: "success",
          confirmButtonText: "OK",
        })


        localStorage.setItem("expense", JSON.stringify(new_expense));
    }
    return (
      <tr>
        <td className="border border-gray-300 py-3 px-3">{no}</td>
        <td className="border border-gray-300 py-3 px-3 font-semibold">
          &#8377;{data.price}
        </td>
        <td className="border border-gray-300 py-3 px-3 hidden  lg:table-cell">
          {data.description}
        </td>
        <td className={"border border-gray-300 py-3 px-3 text-center"}>
          {data.purpose == "income" && (
            <span className="px-4 py-1 bg-green-100 rounded-full text-green-600">
              {"Income"}
            </span>
          )}
          {data.purpose == "expense" && (
            <span className="px-4 py-1 bg-red-100 rounded-full text-red-600">
              Expense
            </span>
          )}
        </td>
        <td className="border border-gray-300 py-3 px-3">
          <button
            onClick={deleteExpense}
            className="px-3 py-1 rounded bg-red-500
           text-white "
          >
            Delete
          </button>

          <UpdateExpense data={data} />
        </td>
      </tr>
    );
}

export default ExpenseCard