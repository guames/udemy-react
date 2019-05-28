import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state ={
      persons: [
          { name: 'Joao', age: 14},
          { name: 'Pedro', age: 19},
          { name: 'Paulo', age: 23},
      ]
    };

    switchNameHandler = () => {
        console.log('Was clicked');
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, my 1st React app</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbie: Surf</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}
export default App;
