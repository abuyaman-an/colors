function Square({color, onClick}){
    return(
        <div
            style={{
                width:50,
                height:50,
                cursor: 'pointer',
                background: color,
            }}
            onClick={onClick}
        />
    )
}

export default Square;