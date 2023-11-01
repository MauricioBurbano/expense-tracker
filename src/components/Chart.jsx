import Bar from './Bar'
import './Chart.css'

function Chart(props) {
    const years = props.yearlyExpenses.map(expense => {
        return expense.year
    }).sort()

    let values = []
    years.forEach(year => {
        values.push(props.yearlyExpenses.find(expense => expense.year === year).value)
    });

    let sortedExpenses = []

    for (let i = 0; i < years.length; i++) {
        sortedExpenses.push({
            year: years[i],
            value: parseFloat(values[i])
        })
    }

    function getYearWidth() {
        return (500 / props.yearlyExpenses.length) + 'px'
    }

    function getHeight(value) {
        const values = props.yearlyExpenses.map(expense => {return parseFloat(expense.value)})
        
        let max = 0
        values.forEach(value => {
            if (value > max) max = value
        });

        const height = value * 100 / max

        return height + 'px'
    }

    return (
        <div className='bar'>
            {sortedExpenses.map(expense => <Bar 
                key={Math.random()}
                height={getHeight(parseFloat(expense.value))} 
                width={getYearWidth()}
                year={expense.year}
                />)
            }
        </div>
    )
}

export default Chart