import Filter from "./Filter"
import Expense from "./Expense"
import { useState } from "react"

function Expenses(props) {
    const [filter, setFilter] = useState('All')

    function handleFilter(selection) {
        setFilter(selection)
    }

    return (
        <>
            <Filter expenses={props.expenses} onFilter={handleFilter} value={filter} />
            {(props.expenses.filter((expense) => {
                if (filter === 'All') {
                    return true
                } else if (filter === expense.date.substring(0, 4)) {
                    return true
                } else return false
            })).map(expense => { return <Expense expense={expense} key={expense.key} />})}
        </>
    )
}

export default Expenses