import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Here app is taken and redered inthe root element which is rendered using react.DOM and passed to index.html
// index.html is present in the main public folder for the display

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
