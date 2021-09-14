

const Weather = (props) => (
    <div className="weatherContainer">
        <img src='https://image.flaticon.com/icons/png/128/4814/4814247.png' alt="dasdas" className="weatherImg"/>
        <p className="temperature">+17</p>
        <div className="morningNight">
            <p className="morningNightText">Утром +17,</p>
            <p className="morningNightText">днём +20</p>
        </div>
    </div>
    
)

export default Weather