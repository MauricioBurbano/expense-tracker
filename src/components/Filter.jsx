function Filter(props) {
    const years = props.yearlyExpenses.map(expense => {
        return expense.year
    }).sort()

    function handleSelect(event) {
        props.onFilter(event.target.value)
    }

    return (
        <select onChange={handleSelect} value={props.value}>
            <option key={Math.random()}>All</option>
            {years.map(year => {
                return <option key={Math.random()}>{year}</option>
            })}
        </select>
    )
}

export default Filter 