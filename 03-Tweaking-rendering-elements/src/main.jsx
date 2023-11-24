import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// since App.jsx is returing a function => create a function here itself and render it
// any kind of function can be written directly and rendered
function MyApp() {
	return <div>Custom App!</div>;
}

// making a directly parsed tree itself => to do the things => direct transpilation
// making obj for direct rendering as per format of bundler of the react
const someElement = (
	<a href="https://google.com" target="_blank">
		Visit Google
	</a>
);

// create the tree like structure of the React bundle syntax

// evaluated expressions  can be done here as well
const userName = "SumitZha";

const reactElement = React.createElement(
	"a",
	{
		href: "https://google.com",
		target: "_blank",
	},
	"click to visit google ",
	userName
	// after all the things evaluated expressions can be inserted
);
// ReactDOM.createRoot(document.getElementById("root")).render(MyApp()); // renders the App in functional format
// ReactDOM.createRoot(document.getElementById("root")).render(someElement); // renders the a tag in tree format

// react.createElement => creates the element
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
