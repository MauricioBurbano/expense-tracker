import Form from "./components/Form"
import Expenses from "./components/Expenses"
import Filter from "./components/Filter"
import { useState } from "react"

function App() {
  const [expenses, setExpenses] = useState([])
  const [filter, setFilter] = useState('All')

  function handleForm(input) {
    setExpenses(prev => [input, ...prev])
  }

  function handleFilter(filter) {
    setFilter(filter)
  }

  return (
    <>
      <Form onSubmit={handleForm} />
      <Filter filter={handleFilter} expenses={expenses} />
      <Expenses expenses={expenses} filter={filter} />
    </>
  )
}

export default App
