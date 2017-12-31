import React, {Component} from 'react';
import './css/App.css';
import Clock from './Clock';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'January 01, 2018',
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline})
    }

    render(){
        return(
        <div className="App">
            <div className="App-title">
                Counter to {this.state.deadline}
            </div>
            <Clock
                deadline={this.state.deadline}
            />
            <div className="Input">
                <input className="Input-form" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <button className="Button" type="submit" onClick={() => this.changeDeadline()}>Submit</button>
            </div>
        </div>
        )
    }
}

export default App;
