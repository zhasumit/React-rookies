import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ContextProvider from "./context/userContextProvider";

function App() {
	return (
		<>
			<ContextProvider>
				<h1>React with context API [ State Management ]</h1>
				<Login />
				<Profile />
			</ContextProvider>
		</>
	);
}

export default App;
