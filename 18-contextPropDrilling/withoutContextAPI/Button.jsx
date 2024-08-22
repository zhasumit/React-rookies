import React from "react";
import Component1 from "./Component1";

const Button = ({ count }) => {
    return (
        <div>
            <button>
                <Component1 count={count} />
            </button>
        </div>
    );
};

export default Button;
