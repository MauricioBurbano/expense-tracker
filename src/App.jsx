import Form from "./components/Form"
import Expenses from "./components/Expenses"
import { useState } from "react"

function App() {
  const [expenses, setExpenses] = useState([])

  function handleForm(input) {
    setExpenses(prev => [input, ...prev])
  }

  return (
    <>
      <Form onSubmit={handleForm} />
      <Expenses expenses={expenses} />
    </>
  )
}

export default App
