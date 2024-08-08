import React from "react";
import C from "./C";

const B = (props) => {
    return (
        <div className="box">
            <h1>B</h1>
            <C user={props.user} />
        </div>
    );
};

export default B;
