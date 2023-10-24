import Expense from "./Expense"

function Expenses(props) {
    return (
        <>
            {props.expenses.map((expense) => {
                return <Expense expense={expense} key={Math.random()} />
            })}
        </>
    )
}

export default Expenses