function Expense(props) {
    return (
        <div>
            <p>{props.expense.title}</p>
            <p>{props.expense.value}</p>
            <p>{props.expense.date}</p>
        </div>
    )
}

export default Expense