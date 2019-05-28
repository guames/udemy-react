import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [personsState, setPersonsState] =  useState({
            persons: [
                { name: 'Joao', age: 14},
                { name: 'Pedro', age: 19},
                { name: 'Paulo', age: 23},
            ]
        }
    );

    const [otherState, setOtherState] = useState('Some other value');

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 11},
                { name: 'Pedro', age: 12},
                { name: 'Jose', age: 28},
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, my 1st React app</h1>
            <button onClick={switchNameHandler.bind(this, 'Gustavo')}>Switch Name</button>
            <Person click={switchNameHandler.bind(this, 'Joao')}
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name}
                    age={personsState.persons[1].age}>My hobbie: Surf</Person>
            <Person name={personsState.persons[2].name}
                    age={personsState.persons[2].age}/>
        </div>
    );
};
export default App;
