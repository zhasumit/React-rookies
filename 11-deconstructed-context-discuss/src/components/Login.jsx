import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};
	return (
		<div>
			<h1>Login</h1>
			<input
				style={{
					fontSize: "20px",
					marginBottom: "10px",
					minWidth: "400px",
					padding: "10px",
					border: "none",
					borderRadius: "10px",
				}}
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="username"
			/>
			<br />
			<input
				style={{
					fontSize: "20px",
					marginBottom: "10px",
					minWidth: "400px",
					padding: "10px",
					border: "none",
					borderRadius: "10px",
				}}
				type="text"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="password"
			/>
			<br />
			<button
				onClick={handleSubmit}
				style={{
					fontSize: "20px",
					marginBottom: "10px",
					minWidth: "150px",
					padding: "10px",
					border: "none",
					marginTop: "20px",
				}}
			>
				Submit
			</button>
			<br />
			<br />
		</div>
	);
}

export default Login;
