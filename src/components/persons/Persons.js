import React from 'react';
import Person from "./person/Person";


const persons = (props) => (
    <div>
        {props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => props.changed(event, person.id)}
                />
            );
        })}
    </div>
);


export default persons;