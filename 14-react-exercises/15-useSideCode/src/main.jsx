import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyEffect from "./MyEffect.jsx";
import Dimensions from "./Dimensions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // strictMode : developement-only-mode --> clean-up-cycle
    <React.StrictMode>
        <MyEffect />
        <Dimensions />
        {/* uncomment and comment to see the useEffect changes */}
    </React.StrictMode>
);
