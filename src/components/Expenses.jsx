import Expense from "./Expense"

function Expenses(props) {
    return (
        <>
            {props.expenses.map((expense, index) => {
                return <Expense expense={expense} key={Math.random() + index} />
            })}
        </>
    )
}

export default Expenses