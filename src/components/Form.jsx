import { useState } from "react"

function Form(props) {
    const [input, setInput] = useState({
        title: '',
        value: '',
        date: '',
    })

    function handleInput(event) {
        const {name, value} = event.target

        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleForm(event) {
        event.preventDefault()

        props.onSubmit(input)
    }

    return(
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Title" name="title" onChange={handleInput} value={input.title} />
            <input type="number" placeholder="Value" min='0.01' step='0.01' name="value" onChange={handleInput} value={input.value} />
            <input type="date" min='2020-01-01' max='2023-12-31' name="date" onChange={handleInput} value={input.date} />
            <button>Submit</button>
        </form>
    )
}

export default Form