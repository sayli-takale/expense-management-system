import React, { useState, useContext } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Swal from "sweetalert2"
import { mainContext } from "../context/mainContextApi";

export default function UpdateExpense({data}) {
  let [isOpen, setIsOpen] = useState(false);

  const {allExpense, setAllExpense}= useContext(mainContext)
  
  
      const onSubmitHandler=(event)=>{
          try{
               event.preventDefault()
               const formData = new FormData(event.target)
               const price = formData.get("price") ||0
               
               const description = formData.get("description") ||''
               const purpose = formData.get("purpose") ||''
  
               if(!description ||price<=0 || !purpose){
                  alert("please! fill all details properly")
                  return
               }
  
               const exp = {
                  price,
                  description,
                  purpose,
                  
               }
               const new_expences = allExpense.map((cur, i)=>{
                if(cur.id ==data.id){
                    return {
                        ...cur,
                        ...exp
                    }
                }
                return cur
               })
  
  setAllExpense(new_expences)
  
  localStorage.setItem("expense",JSON.stringify(new_expences))
  
  
  Swal.fire({
    title: "Success!",
    text: "Expense Update Successfully",
    icon: "success",
    confirmButtonText: "OK",
  })
    close()    

          } catch (error){
              console.error(error.message)
          }
      }
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={open}
        className="px-3 py-1 rounded bg-orange-500 text-white"
      >
        Update
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="div"
                className="text-base/7 font-medium text-black flex items-centre justify-between"
              >
                <h3>Update Expence</h3>
                <button onClick={close}>X</button>
              </DialogTitle>

              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="price">Price (in rs)</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    required
                    className="w-full py-2 border border-gray-400 rounded outline-none px-3"
                    defaultvalue={data.price}
                    placeholder="Enter Price"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    value={data.description}
                    type="number"
                    name="description"
                    required
                    className="w-full py-2 border border-gray-400 rounded outline-none px-3"
                    placeholder="Enter Description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="Purpose">Purpose</label>

                  <select
                    defaultValue={data.purpose}
                    className="w-full py-2 border border-gray-400 rounded outline-none px-3"
                    name="purpose"
                    id="description"
                    required
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
                <div className="mb-3">
                  <button className="w-full py-2  bg-indigo-500 rounded-md text-white">
                    Update Expense
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

