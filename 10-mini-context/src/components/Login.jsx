import { useContext, useState } from "react";
import { UserContext } from "../context/userContextProvider";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const ctx = useContext(UserContext);

	console.log(ctx.user);
	const handleSubmit = (e) => {
		e.preventDefault();
		ctx.setUser({ username, password });
	};

	return (
		<div>
			<h2>Login</h2>
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				placeholder="username"
			/>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="password"
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
