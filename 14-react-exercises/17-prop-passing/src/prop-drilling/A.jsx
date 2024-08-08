import React from "react";
import { useState } from "react";
import B from "./B";

const A = () => {
    const [user, setUser] = useState("Sumit");

    return (
        <div className="box">
            <h1>A</h1>
            <h2>{user}</h2>
            <B user={user} />
        </div>
        // prop drilling is like drilling the prop through to the end of layers of components.
    );
};

export default A;
