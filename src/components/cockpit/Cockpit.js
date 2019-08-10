import React, {useEffect} from "react";
import "./Cockpit.css";
import AuthContext from '../../context/AuthContext';


const Cockpit = (props) => {
    const toggleBtnRef = React.useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // HTTP Request...
        const timer =  setTimeout(() => {alert("Send something")}, 1000);
        return () => {
            clearTimeout(timer);
            console.log("[Cockpit.js] clean up work in useEffect");
        }
    }, []);  // pass empty array to only fire when component is created or destroyed, or non-empty array to only trigger when element changes
    // Remember will also run clean up function in "return"

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] clean up work in 2nd useEffect");
        }
    });  // no empty array passed in, so 2nd useEffect will fire everytime when page re-render happens.

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


    if (props.personsLength <= 2) {
        classes.push('red');  // classes will be ['red']
    }

    if (props.personsLength <= 1) {
        classes.push('bold');  // classes will be ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} style={btnClass} onClick={props.toggle}>Toggle Persons</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    )
};


export default React.memo(Cockpit);