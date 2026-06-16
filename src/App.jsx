import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddExpense from './components/AddExpence'
import AllExpense from './components/AllExpense'
import ListExpense from './components/ListExpense'

import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="py-5 w-[80%] mx-auto">
        <AddExpense />
        <AllExpense />
        <ListExpense />
      </main>
    </>
  );
}

export default App
