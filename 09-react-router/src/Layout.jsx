import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;

// outlet => things that can be changing in those portions
// header and footer remain same but outlet changes
