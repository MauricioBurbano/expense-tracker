function Add(props) {
    function handleClick() {
        props.onToggle()
    }

    return (
        <>
            <button onClick={handleClick}>Add New Expense</button>
        </>
    )
}

export default Add