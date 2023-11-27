import { useParams } from "react-router-dom";

function Unknown() {
	const { unknown } = useParams();
	return (
		<div className="text-center mb-40  text-xl ">
			<img
				src="./images/404.gif"
				className="w-3/5 mx-auto my-auto flex justify-center items-center rounded-full mb-0 mt-0 "
			/>
			Nothing like{" "}
			<span className="text-orange-800 font-semibold">{unknown}</span>{" "}
			😕...
		</div>
	);
}

export default Unknown;
