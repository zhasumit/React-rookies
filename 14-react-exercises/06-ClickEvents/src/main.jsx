import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button.jsx";
import "./index.css";
import ButtonWithArg from "./ButtonWithArg.jsx";
import ConditionalButtons from "./ConditionalButtons.jsx";
import ClickEvent from "./ClickEvent.jsx";
import DoubleClick from "./DoubleClick.jsx";
import ElementsWithBtn from "./ElementsWithBtn.jsx";

// Interaction that user clicks on a specific element
// respond to interactions by callback passing
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Button />
        <ButtonWithArg />
        <ConditionalButtons />
        <ClickEvent />
        <DoubleClick />
        <ElementsWithBtn/>
    </React.StrictMode>
);
