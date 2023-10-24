import Expense from "./Expense"

function Expenses(props) {
    return (
        <>
            {(props.expenses.filter((expense) => {
                if (props.filter === 'All') {
                    return true
                } else if (props.filter === expense.date.substring(0, 4)) {
                    return true
                } else return false
            })).map(expense => { return <Expense expense={expense} key={Math.random()} />})}
        </>
    )
}

export default Expenses