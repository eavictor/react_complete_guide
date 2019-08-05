import React from "react";
import "./Cockpit.css";


const cockpit = (props) => {
    const classes = [];

    let btnClass = {
        border: "1px solid #0000ff",
        padding: "16px",
        backgroundColor: "#00ff00",
        font: "inherit",
        color: "#ffffff",
        cursor: "pointer"
    };
    if (props.showPersons) {
        btnClass.backgroundColor = "#ff0000";
    }


    if (props.persons.length <= 2) {
        classes.push('red');  // classes will be ['red']
    }

    if (props.persons.length <= 1) {
        classes.push('bold');  // classes will be ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={btnClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
};


export default cockpit;