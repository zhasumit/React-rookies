import React from "react";
import Button from "./Button";

const Navbar = ({ count }) => {
    return (
        <nav>
            <ul>
                <li>🪡 Nav</li>
                <li>
                    <Button count={count} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
