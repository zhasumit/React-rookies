// deisigning custom render
function customRender(reactElement, container) {
	// create the dom element to inject
	const domElement = document.createElement(reactElement.type);

	// Put the things into the container
	domElement.innerHTML = reactElement.children;

	// setting attributes
	domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target);

	// add the element into the mainContainer
	container.appendChild(domElement);
}

// converting the obtained function into react function format
// react makes a tree out of the things (objects it obtains)

// This is a simulation of things that can be done in the tree structure
const reactElement = {
	type: "a",
	props: {
		href: "https://google.com/",
		target: "_blank",
	},
	children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

// for rendering part -> adding to the root (lets take an anchor tag for rendering)
// customRender(whatToinject, whereToinject);
customRender(reactElement, mainContainer);
