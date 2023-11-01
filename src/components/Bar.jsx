function Bar(props) {
    return (
        <>
            <div style={
                    {
                        height: props.height, 
                        width: props.width, 
                        backgroundColor: "black",
                        color: "white"
                    }
                }
            >{props.year}</div>
        </>
    )
}

export default Bar