// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
	// This can be done but we are doing using the Loader => cache the things
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/zhasumit")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	// useLoaderData is a loader that takes loader data and hooks to a variable
	const data = useLoaderData();

	return (
		<div className="text-center m-4 p-4 text-3xl ">
			<img
				src={data.avatar_url}
				className="  mx-auto my-auto flex justify-center items-center rounded-full h-72 mb-6"
			/>
			<div className="font-small  text-xl mb-10">
				Name: {data.name}
				<br />
				username: {data.login}
				<br />
				url:{" "}
				<a href={data.html_url} target="_blank">
					{data.html_url}
				</a>
			</div>
		</div>
	);
}

export default Github;
