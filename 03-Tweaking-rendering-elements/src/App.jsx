import Chai from "./chai";

function App() {
	const userName = "Sumit Kumar Jha";

	return (
		<div>
			<h1>Hello world using vite | {userName}</h1>
			<Chai />
		</div>
	);
}

export default App;

// {js syntax in jsx} : expression => evaluated expression
// only the final outcome of all the logic is given into this expression
// logic is sepratedly handled (only final outcome (evaluated) is passed)
