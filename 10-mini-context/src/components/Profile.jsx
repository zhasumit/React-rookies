import { useContext } from "react";
import { UserContext } from "../context/userContextProvider";

function Profile() {
	const ctx = useContext(UserContext);
	console.log(ctx)
	if (!ctx.user.username) return <div>Please Login</div>;
	return <div>Welcome {ctx.user.username}</div>;
    // return <div>Profile</div>
}

export default Profile;
