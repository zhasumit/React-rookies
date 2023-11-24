import { useState } from "react";
import "./App.css";

function App() {
	// useState responsible for changing the state (Changes are propogated throughout the UI)
	// useState(default_Value, ) => return two things in array format [counter, Function]
	// the list variables are just the names can be written anything
	const [counter, setCounter] = useState(0);

	// here the counter value increases but the thing is not updated into the UI part
	// UI changes are always done by the react parts (on some updates)
	// useState is used to change the UI at every point of the page(all the occurances)

	// imporvisation : only take values upto 20
	const addValue = () => {
		if (counter < 20) setCounter(counter + 1);
	};

	// imporvisation : only take the positive values (no negative counting)
	const removeValue = () => {
		if (counter > 0) setCounter(counter - 1);
	};

	return (
		<>
			<h1>Counter</h1>
			<h2 id="blue"> {counter} </h2>

			<button onClick={addValue}> Add Value ➕ </button>
			<button onClick={removeValue}> Remove Value ➖ </button>
		</>
	);
}

export default App;
