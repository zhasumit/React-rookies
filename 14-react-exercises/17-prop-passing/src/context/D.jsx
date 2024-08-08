import React, { useContext } from "react";
import { UserContext } from "./A.jsx";
// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//     import { someContext } from './providerComponent';
// 2. const value = useContext(MyContext);

// importing the context
// we trverse up the component tree to find the nearest provider

const D = () => {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>D</h1>
            <h2>Bye bye {user} </h2>
        </div>
    );
};

export default D;
