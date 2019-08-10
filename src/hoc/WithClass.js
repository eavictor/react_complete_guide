import React from 'react';

// const WithClass = props => {
//     return (
//         <div className={props.classes}>
//         {props.children}
//     </div>
//     )
// };
//
// export default WithClass;


// another form of HOC

const withClass = (ComponentToWarp, className) => {
    return props => (
        <div className={className}>
            <ComponentToWarp {...props}/>
        </div>
    );
};


export default withClass;