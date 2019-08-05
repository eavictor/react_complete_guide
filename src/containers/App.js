import React, { Component } from 'react';
import './App.css';
import Person from '../components/persons/person/Person';


class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Max", age: 29},
            {id: 2, name: "Manu", age:28},
            {id: 3, name: "Stephanie", age: 20}
        ],
        otherState: "some other value",
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex])
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    };

    render(){
        const style = {
            backgroundColor: "#ffffff",
            font: "inherit",
            border: "1x solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        )
                    })}
                </div>
            );
            style.backgroundColor = "#ff0000";
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');  // classes will be ['red']
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');  // classes will be ['red', 'bold']
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    }
}


export default App;