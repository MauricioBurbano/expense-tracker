import { useState } from "react"
import Form from "./components/Form"
import Expenses from "./components/Expenses"
import Add from "./components/Add"

function App() {
  const [displayForm, setDisplayForm] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [yearlyExpenses, setYearlyExpenses] = useState([])

  function getYear(date) {
    return date.slice(0, 4)
  }

  function handleForm(input, key) {
    const uniqueInput = {...input, key: key}
    setExpenses(prev => [uniqueInput, ...prev])

    setYearlyExpenses(prev => {
      const index = prev.findIndex(expense => expense.year === getYear(input.date))

      if (index !== -1) {
        let value = parseFloat(prev[index].value)
        value += parseFloat(input.value)/2

        prev[index] = {
          ...prev[index],
          value: value
        }

        return [...prev]
      } else {
        return [
          ...prev,
          {
            key: Math.random(),
            year: getYear(input.date),
            value: input.value
          }
        ]
      }
    })
  }

  function toogleDisplay() {
    setDisplayForm(prev => prev)
  }

  return (
    <>
      {displayForm 
        ? <Form onSubmit={handleForm} onToggle={toogleDisplay} /> 
        : <Add onToggle={toogleDisplay} />
      }
      <Expenses expenses={expenses} yearlyExpenses={yearlyExpenses} />
    </>
  )
}

export default App
