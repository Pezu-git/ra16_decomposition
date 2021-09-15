
// Отображение ссылки на новость 

function NewsListItem(props) {
    return (
            props.children.map((item, index) => 
            <li className={props.className} key={index}>{item}</li>
         )   
    )  
}

export default NewsListItem