import React from 'react'
import PropTypes from "prop-types"
const UserGreet = (props) => {
    // deconstructing the props object into individual variables
    const { isLoggedIn, userName } = props;


    // Method 1 : using if else as in JS vanilla
    // if (isLoggedIn) return (
    //     <h2>Welcome {userName}</h2>
    // )
    // return (
    //     <h2>Please Login</h2>
    // )


    // Method 2 : using ternary operator
    // return (props.isLoggedIn ?
    //     <h2 className='welcome-prompt'>Welcome {props.userName}</h2>
    //     : <h2 className='loginMessaage'>Please Login</h2>)


    // using variables for reusability
    // const welcomePrompt = <h2 className='welcome-prompt'>Welcome {userName}</h2>;
    // const loginMessage = <h2 className='loginMessaage'>Please Login</h2>;
    // return (isLoggedIn ? welcomePrompt : loginMessage)


    // Method 4 : do all the precalculations outside the render function
    const message = isLoggedIn ?
        <h2 className='welcome-prompt'>Welcome {userName}</h2>
        : <h2 className='loginMessaage'>Please Login</h2>;

    return message;
}

// the dependency on PropTypes library for type checking
UserGreet.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
}

// for the default props values
UserGreet.defaultProps = {
    isLoggedIn: false,
    userName: 'Guest'
}
export default UserGreet