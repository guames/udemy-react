import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [visibilityPerson, setVisibilityPerson] = useState(true);
    const [personsState, setPersonsState] =  useState({
            persons: [
                { name: 'Joao', age: 14},
                { name: 'Pedro', age: 19},
                { name: 'Paulo', age: 23},
            ]
        }
    );

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 11},
                { name: 'Pedro', age: 12},
                { name: 'Jose', age: 28},
            ]
        });
    };

    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                { name: event.target.value, age: 11},
                { name: 'Pedro', age: 12},
                { name: 'Jose', age: 28},
            ]
        });
    };

    const togglePersonHandler = () => {
        setVisibilityPerson(!visibilityPerson);
    };

    const style ={
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="App">
            <h1>Hi, my 1st React app</h1>

            <button
                style={style}
                onClick={switchNameHandler.bind(this, 'Gustavo')}>Switch Name</button>

            <button
                style={style}
                onClick={togglePersonHandler}>Toggle Visibility</button>

            { visibilityPerson ?
                <div>
                    <Person click={switchNameHandler.bind(this, 'Joao')}
                            name={personsState.persons[0].name}
                            age={personsState.persons[0].age}
                            change={nameChangeHandler}/>

                    <Person name={personsState.persons[1].name}
                    age={personsState.persons[1].age}>My hobbie: Surf</Person>
                    <Person name={personsState.persons[2].name}
                    age={personsState.persons[2].age}/>
                </div>
                : <p>Nothing</p>
            }

        </div>
    );
};
export default App;
