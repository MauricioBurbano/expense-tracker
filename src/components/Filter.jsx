import { useState } from "react"

function Filter(props) {
    const [filter, setFilter] = useState('All')
    
    let years = props.expenses.map(expense => expense.date.substring(0, 4)).sort()
    years = unique(years)

    function unique(years) {
        let uniqueYears = []

        years.forEach(year => {
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });

        return uniqueYears
    }

    function handleSelect(event) {
        props.filter(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <select onChange={handleSelect} value={filter}>
            <option key={Math.random()}>All</option>
            {years.map((year) => {
                return <option key={Math.random()}>{year}</option>
            })}
        </select>
    )
}

export default Filter 