import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, my 1st React app</h1>
                <Person name="Joao" age="12"/>
                <Person name="Pedro" age="18"/>
                <Person name="Jose" age="22"/>
            </div>
        );
    }
}
export default App;
