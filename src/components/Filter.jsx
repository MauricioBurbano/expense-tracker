function Filter() {
    const years = [2020, 2021, 2022, 2023]

    return (
        <select>
            <option key={Math.random()}>All</option>
            {years.map((year) => {
                return <option key={Math.random()}>{year}</option>
            })}
        </select>
    )
}

export default Filter 