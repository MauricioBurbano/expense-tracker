function Expense(props) {
    return (
        <>
            <p>{props.expense.title}</p>
            <p>{props.expense.value}</p>
            <p>{props.expense.date}</p>
        </>
    )
}

export default Expense