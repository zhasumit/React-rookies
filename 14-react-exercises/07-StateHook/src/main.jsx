import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Name from "./Name";
import Counter from "./Counter";
// React Hook :special function that allows UI changes to trigger re-renders
// (useState, useEffect, useRef, useContext, etc.)

// useState : stateful variables - stateful data in React
// setter function to update the state (name, setName)
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Name />
        <Counter />
    </React.StrictMode>
);
