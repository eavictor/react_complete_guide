import React from 'react';
import Person from "./person/Person";


// const Persons = (props) => {
//     console.log("[Persons.js] rendering...");
//     return props.persons.map((person, index) => {
//         return (
//             <Person
//                 key={person.id}
//                 click={() => props.clicked(index)}
//                 name={person.name}
//                 age={person.age}
//                 changed={(event) => props.changed(event, person.id)}
//             />
//         );
//     }
//     )
// };


class Persons extends React.Component {

    componentDidMount(){
        console.log("[Persons.js] componentDidMount");
    }

    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount")
    }

    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[Persons.js] shouldComponentUpdate");
        return (this.props.persons !== nextProps.persons) | (this.props.isAuthenticated !== nextProps.isAuthenticated);  // array only compares memory address (the pointer value to array object).
    }

    render(){
        return this.props.persons.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event, person.id)}
                    />
                );
            })};
}


export default Persons;