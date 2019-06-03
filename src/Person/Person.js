import React from 'react'
import './Person.css'

const person = (props) => {
    return (<div onClick={props.click} className="Person">
        <p >I'm {props.name} an I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change}/>
    </div>);
};

export default person;