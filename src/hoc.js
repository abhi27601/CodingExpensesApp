console.log("hoc")
// A component renders another component
//reuse code
// render hijacking
//prop manipulation
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    </div>
);

//previledged info .. 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAdmin == true &&  <p> This is private Info .Please dont share</p>}
            
            <WrappedComponent {...props}/>
        </div>
    )// HOC component
}


const AdminInfo = withAdminWarning(Info)


ReactDOM.render(<AdminInfo isAdmin={true} info = 'There are the details'/>,document.getElementById('app'));

