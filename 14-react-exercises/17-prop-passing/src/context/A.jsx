import React from "react";
import B from "./B";
import { useState, createContext } from "react";
export const UserContext = createContext();
// exporting the context
// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level

const A = () => {
    const [user, setUser] = useState("Sumit Jha");
    return (
        <div className="box">
            <h1>A</h1>
            <h2>{user}</h2>
            {/* Any child componenet of provider can access the value  */}
            {/* 1. useContext hook -> 2. Import the context -> 3. store -> 4. use context using {} */}
            <UserContext.Provider value={user}>
                <B />
            </UserContext.Provider>
        </div>
    );
};

// PROVIDER COMPONENT : exporter function
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

export default A;
