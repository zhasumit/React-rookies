import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);
	if (!user) return <div>please login ...</div>;
	return (
		<div
			style={{
				fontSize: "30px",
			}}
		>
			Welcome{" "}
			<span
				style={{
					color: "tomato",
					fontFamily: "Lexend",
				}}
			>
				{user.username}
			</span>
		</div>
	);
}

export default Profile;
