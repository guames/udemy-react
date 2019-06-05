import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    let personJsx = null;
    const [visibilityPerson, setVisibilityPerson] = useState(true);
    const [personsState, setPersonsState] =  useState({
            persons: [
                { id: 1, name: 'Joao', age: 14},
                { id: 2,name: 'Pedro', age: 19},
                { id: 3,name: 'Paulo', age: 23},
            ]
        }
    );

    const nameChangeHandler = (event, personId) => {

        var personIndex = personsState.persons.findIndex(p => {
            return p.id === personId;
        })
        var person ={...personsState.persons[personIndex]};

        person.name = event.target.value;

        var persons = [...personsState.persons];

        persons[personIndex] = person;

        setPersonsState({persons: persons})

    };

    const deletePersonHandler = (personIndex) => {
        var persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({persons: persons});
    };

    const togglePersonHandler = () => {
        setVisibilityPerson(!visibilityPerson);
    };

    const style ={
        backgroundColor: 'red',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    if(visibilityPerson){
        personJsx = (
            <div>
                {
                    personsState.persons.map((person, index) => {
                        return <Person key={person.id}
                                       click={() => deletePersonHandler(index)}
                                       changed={(event) => nameChangeHandler(event, person.id)}
                                       name={person.name}
                                       age={person.age}/>
                    })
                }
            </div>
        );
        style.backgroundColor = 'green';
    }

    return (
        <div className="App">
            <h1>Hi, my 1st React app</h1>

            <button
                style={style}
                onClick={togglePersonHandler}>Toggle Visibility</button>
            {personJsx}
        </div>
    );
};
export default App;
