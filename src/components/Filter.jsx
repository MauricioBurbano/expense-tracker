import { useState } from "react"

function Filter(props) {
    const [filter, setFilter] = useState('All')
    const years = [2020, 2021, 2022, 2023]

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