import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import withClass from "../hoc/WithClass";
import AuthContext from '../context/AuthContext';


class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Max", age: 29},
            {id: 2, name: "Manu", age:28},
            {id: 3, name: "Stephanie", age: 20}
        ],
        otherState: "some other value",
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    };

    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    };

    static getDerivedStateFromProps(props, state){
        console.log("[App.js] getDerivedStateFromProps", props);
        return state
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[App.js] getSnapshotBeforeUpdate", prevProps);
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }

    componentWillUnmount(){
        console.log("[App.js] componentWillUnmount")
    }

    componentDidMount(){
        console.log("[App.js] componentDidMount")
    }

    componentDidUpdate(){
        console.log("[App.js] componentDidUpdate")
    }

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

        // Not guaranteed latest state
        // this.setState({
        //     persons: persons,
        //     changeCounter: this.state.changeCounter + 1
        // })

        // Guarantee latest state
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    };


    removeCockpit = () => {
        this.setState({showCockpit: false});
    };

    loginHandler = () => {
        this.setState((prevState, prevProps) => {
            return {authenticated: true};
        });

    };

    render(){
        console.log("[App.js] render");
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
            <div>
                <button onClick={this.removeCockpit}>Remove Cockpit</button>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                {this.state.showCockpit ? (
                    <Cockpit
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        toggle={this.togglePersonsHandler}
                        login={this.loginHandler}
                    />
                    ) : null}
                {persons}
                </AuthContext.Provider>
            </div>
        )
    }
}


export default withClass(App, "App");