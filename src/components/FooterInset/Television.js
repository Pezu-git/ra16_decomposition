//виджет телепрограммы
const program = ['02:00 ТНТ', '02:15 Джинглики']

const Television = (props) => (
    <div className="widgetContainer">
        <div className="programmContainer">
        {program.map((item, index) => <p className="program" key={index} >{item}</p>)}
            
        </div>
    </div>
    
)

export default Television