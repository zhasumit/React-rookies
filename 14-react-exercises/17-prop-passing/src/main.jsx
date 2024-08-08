import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import A from "./prop-drilling/A.jsx";
import A from "./context/A.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <A />
    </React.StrictMode>
);
