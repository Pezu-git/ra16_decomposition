//владка
function InsetItem(props) {
    return (
        <div className={props.itemClass} >
            {props.children.map((item, index) => 
            <a href="#root" className={props.className} key={index}>{item}</a>
         )}
        </div>
        
    )  
}

export default InsetItem