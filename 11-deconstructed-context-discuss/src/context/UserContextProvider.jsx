import React from "react";
import UserContext from "./UserContext";

// children is for taking the props children and passing it further

const UserContextProvider = ({ children }) => {
	const [user, setUser] = React.useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

// here userContext is providing the context
// so the .Provider is used to denote provider
// value of provider provides the access of whatever thing we need to provide access

export default UserContextProvider;
