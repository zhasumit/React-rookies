import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
	title: "",
	src: "",
	channel: "",
};

function AddVideo({ dispatch, videoToEdit }) {
	// This is for receiving a single video as an object
	// This is to be further sent to the parent to inclue in the videos list
	const [video, setVideo] = useState(initialState);
	// update the state of the video in the form only when edit button is taken effect

	// Passing props to the PARENT
	function handleSubmit(e) {
		e.preventDefault(); // to stop the reloading of the page
		if (videoToEdit) dispatch({ type: "UPDATE", payload: video });
		else dispatch({ type: "ADD", payload: video }); // this video is the currently added video
		setVideo(initialState); // to clear form
		// here videoSetter contains a function that uses the setter to set the video
	} // now we need to send this video to the parent from this child
	// Lifting state up (upward flow)

	function handleChange(e) {
		setVideo({
			...video,
			// set the key value pair
			[e.target.name]: e.target.value,
		});
	}

	// useEffect takes place when the component is mounted (rendered)
	useEffect(() => {
		if (videoToEdit !== null) setVideo(videoToEdit);
	}, [videoToEdit]);

	return (
		<form>
			<input
				type="text"
				name="title"
				onChange={handleChange}
				placeholder="Name"
				value={video.title}
			/>
			<input
				type="text"
				name="src"
				onChange={handleChange}
				placeholder="Thumbnail"
				value={video.src}
			/>
			<input
				type="text"
				name="channel"
				onChange={handleChange}
				placeholder="Channel"
				value={video.channel}
			/>
			<button onClick={handleSubmit}>
				{videoToEdit ? "  Edit  " : "➕ video"}
			</button>
		</form>
	);
}

export default AddVideo;
