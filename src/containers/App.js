import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';


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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className="App">
                <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} toggle={this.togglePersonsHandler} />
                {persons}
            </div>
        )
    }
}


export default App;