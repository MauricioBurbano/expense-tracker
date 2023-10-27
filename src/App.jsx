import { useState } from "react"
import Form from "./components/Form"
import Expenses from "./components/Expenses"
import Add from "./components/Add"

function App() {
  const [displayForm, setDisplayForm] = useState(false)
  const [expenses, setExpenses] = useState([])

  function handleForm(input, key) {
    const uniqueInput = {...input, key: key}
    setExpenses(prev => [uniqueInput, ...prev])
  }

  function toogleDisplay() {
    setDisplayForm(prev => !prev)
  }

  return (
    <>
      {displayForm ? 
        <Form onSubmit={handleForm} onToggle={toogleDisplay} /> :
        <Add onToggle={toogleDisplay} />
      }
      <Expenses expenses={expenses} />
    </>
  )
}

export default App
