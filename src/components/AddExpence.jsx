import React, { useContext, useState } from "react";
import { mainContext } from "../context/mainContextApi";
import Swal from "sweetalert2";

const AddExpense = () => {
  const [isHide, setIsHide] = useState(true);
  const { allExpense, setAllExpense } = useContext(mainContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);

      const price = Number(formData.get("price"));
      const description = formData.get("description");
      const purpose = formData.get("purpose");

      if (!description || !purpose || price <= 0) {
        Swal.fire({
          title: "Error!",
          text: "Please fill all details properly.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const exp = {
        id: Date.now(),
        price,
        description,
        purpose,
        created_at: new Date(),
      };

      const newExpenses = [...allExpense, exp];

      setAllExpense(newExpenses);
      localStorage.setItem("expense", JSON.stringify(newExpenses));

      Swal.fire({
        title: "Success!",
        text: "Expense Added Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      console.log("Added Expense:", exp);
      console.log("All Expenses:", newExpenses);

      event.target.reset();
      setIsHide(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-end py-3">
        <button
          onClick={() => setIsHide(!isHide)}
          className="px-4 py-2 bg-indigo-500 rounded text-white cursor-pointer hover:bg-indigo-600"
        >
          {isHide ? "Add +" : "Close ✕"}
        </button>
      </div>

      {!isHide && (
        <div className="py-5">
          <form onSubmit={onSubmitHandler}>
            {/* Price */}
            <div className="mb-3">
              <label htmlFor="price" className="block mb-1 font-medium">
                Price (₹)
              </label>
              <input
                id="price"
                type="number"
                name="price"
                required
                className="w-full py-2 border border-gray-400 rounded outline-none px-3"
                placeholder="Enter Price"
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full py-2 border border-gray-400 rounded outline-none px-3"
                placeholder="Enter Description"
                rows="3"
              ></textarea>
            </div>

            {/* Purpose */}
            <div className="mb-3">
              <label htmlFor="purpose" className="block mb-1 font-medium">
                Purpose
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                className="w-full py-2 border border-gray-400 rounded outline-none px-3"
              >
                <option value="">Select Purpose</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="mb-3">
              <button
                type="submit"
                className="w-full py-2 bg-indigo-500 rounded-md text-white hover:bg-indigo-600"
              >
                Add Expense
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddExpense;
