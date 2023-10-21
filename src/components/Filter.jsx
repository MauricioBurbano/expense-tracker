function Filter(props) {
    const allYears = props.expenses.map(expense => {return getYear(expense.date)}).sort()
    const years = []

    for (let i = 0; i < allYears.length; i++) {
        if (!exist(allYears[i], years)) {
            years.push(allYears[i])
        }
    }

    function exist(value, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) return true
        }
        return false
    }

    function getYear(date) {
        let year = ''
        for (let i = 0; i < 4; i++) {
            year += date.charAt(i)
        }
        return year
    }

    return (
        <select>
            {years.map((year, index) => {
                return <option key={Math.random() + index}>{year}</option>
            })}
        </select>
    )
}

export default Filter 