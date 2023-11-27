import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Unknown from "./components/Unknown/Unknown";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/githubInfoLoader";

// CreateBrowserRouter => creates the routing tree (in a array of objects)
// This is what is stored in the prop which is passed to router
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

// diff syntax to write the same router object tree refernce structure
// Layout contains an outlet which can have all the nesting that is done inside the main root route
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />}></Route>
			<Route path="about" element={<About />}></Route>
			<Route path="contact" element={<Contact />}></Route>
			<Route path="/:unknown" element={<Unknown />}></Route>
			<Route
				loader={githubInfoLoader}
				path="/github"
				element={<Github />}
			></Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
// RouterProvider => takes the props (or doesnot work otherwise)
// router props takes the router => helps to route diff urls
