import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // npm install react-router-dom
    // after that a tag is replaced by link and NavLink from react-router-dom
    // using Link tag we change href -> to attribute
    // in runtime the Link tag is contverted into anchor tag

    // link is converted into NavLink which has classname that can be given callback for active
    // using navlink we can make some active classname on basis of which we give colors
    return (
        <nav>
            <NavLink className={(e) => {return e.isActive ? "red" : "" }} to="/">Home</NavLink>
            <NavLink className={(e) => {return e.isActive ? "red" : "" }} to="/about">About</NavLink>
            <NavLink className={(e) => {return e.isActive ? "red" : "" }} to="/contact">Contact</NavLink>
            <NavLink className={(e) => {return e.isActive ? "red" : "" }} to="/login">Login</NavLink>
            <NavLink className={(e) => {return e.isActive ? "red" : "" }} to="/signup">Signup</NavLink>
        </nav>
    );
};

export default Navbar;
