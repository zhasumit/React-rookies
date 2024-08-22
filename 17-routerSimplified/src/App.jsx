import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    // createBrowserRouter is simply an array of objects that take care routing 
    // with path and the element to be loaded 
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <Home />
                </>
            ),
        },
        {
            path: "/login",
            element: (
                <>
                    <Navbar />
                    <Login />
                </>
            ),
        },
        {
            path: "/about",
            element: (
                <>
                    <Navbar />
                    <About />
                </>
            ),
        },
        {
            path: "/contact",
            element: (
                <>
                    <Navbar />
                    <Contact />
                </>
            ),
        },
        {
            path: "/signup",
            element: (
                <>
                    <Navbar />
                    <Signup />
                </>
            ),
        },
        // for dynamic routes username is some id which can be dynamic 
        {
            path: "/user/:username",
            element: (
                <>
                    <Navbar />
                    <User />
                </>
            ),
        },
    ]);
    // place the router provider where we want to dynamically paste the contents 
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
