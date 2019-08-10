import React from 'react';
import "./Person.css";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext';


const Person = (props) => {
    console.log("[Person.js] rendering...");
    return (
            <div className="Person">
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                </AuthContext.Consumer>
                <p onClick={props.click}>I'm {props.name}, and I am {props.age} years old !</p>
                <p>{props.children}</p>
                <input
                    type="text"
                    // ref={(inputEl) => {inputEl.focus()}}
                    onChange={props.changed}
                    value={props.name}
                />
            </div>
    )
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default Person;