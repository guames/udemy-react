import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, my 1st React app</h1>
                <Person/>
            </div>
        );
    }
}
export default App;
