import React, { createContext, useState} from "react"

export const mainContext =createContext()

export const MainContextApi = ({children}) => {


    const [allExpense,setAllExpense] = useState(JSON.parse(localStorage.getItem("expense")||'[]'))

    return (
      <mainContext.Provider value={{ allExpense, setAllExpense }}>
        {children}
      </mainContext.Provider>
    )
}



export default MainContextApi