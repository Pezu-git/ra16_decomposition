
//курс валют
function ExchangeItem(props) {
    return (
        props.children.map((item, index) =><p {...props} key={index}>{item}</p>)  
    )    
}

export default ExchangeItem