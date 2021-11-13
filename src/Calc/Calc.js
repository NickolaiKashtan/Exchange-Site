import React from 'react';
import './Calc.css';

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }
        
    }

    static getDerivedStateFromProps(props, state) {
        return { rate: props.rate};
    }

    calcRate = (e) => {
        e.preventDefault();
        console.log('work');
        let elem = e.target.elements;
        console.log(elem['count-currency'].value);
        console.log(elem['type-currency'].value);
        let countCurrency =elem['count-currency'].value;
        let typeCurrency =elem['type-currency'].value;
        this.setState({ result : (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
    }

    render(){
       return( 
       <div className="calc">
            <h3>Калькулятор Обмена</h3>
                <div className="block">
                    
                <div>
                    <form onSubmit={this.calcRate} >
                    <input type="number" defaultValue="150" name="count-currency"/>
                    <select name="type-currency" id="">
                    {Object.keys(this.props.rate).map((keyName,i) => (
                    <option key={keyName} value={keyName}>{keyName}</option>
                ))}
                    </select>
                    <input type="submit" defaultValue="calc"/>
                    </form>
                </div>
                <div>
                    <h4>Результат</h4>
                    <ul className="calc-res">
                        <li>EUR {this.state.result}</li>
                    </ul>
                </div>
                </div>
        </div>

    
       );       
    }
}  
export default Calc;
