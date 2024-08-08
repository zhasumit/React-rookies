import React from "react";
import D from "./D";

const C = (props) => {
    return (
        <div className="box">
            <h1>C</h1>
            <D user={props.user} />
        </div>
    );
};

export default C;
