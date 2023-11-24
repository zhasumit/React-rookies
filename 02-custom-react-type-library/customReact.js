function customRender(reactElement, container) {
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	// iterating and putting the values into the domElement
	for (const prop in reactElement.props) {
		if (prop === "children") continue; // to detect children in props
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com/",
		target: "_blank",
	},
	children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);

// for understanding -> go to the hardcoded attribute file
