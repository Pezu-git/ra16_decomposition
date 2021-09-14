

//форма поиска
const SearchInput = (props) => (
    <div className="searchContainer">
        <img src="https://img.icons8.com/doodle/2x/yandex-logo.png" className="searchLogo"/>
        <form className="inputContainer">
            <input className="search"></input>
            <button className="serachButton">Найти</button>
        </form>   
    </div>   
)

export default SearchInput