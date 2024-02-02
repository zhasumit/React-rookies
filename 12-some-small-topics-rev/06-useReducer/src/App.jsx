import "./App.css";
import videosDB from "./data/video-data.json";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { useReducer } from "react";

function App() {
	const [videoToEdit, setVideoToEdit] = useState(null);
	// Reducer is a place where state and all the logics are at the same place
	// There can be multiple reducers in the useReducer that provide diff tools for state management
	function videoReducer(videos, action) {
		// reducer takes some action object
		// Action object contains payload(operation, arguments)
		// action : {type:"ADD", payload:video} which is taken in dispatch function {which dispatch value}
		// all state related files are put on the same place
		// reduces take multiple cases using the 
		switch (action.type) {
			// since it works on type of operation case
			case "ADD":
				return [
					...videos,
					{ ...action.payload, id: videos.length + 1 },
				];

			case "DELETE":
				return videos.filter((v) => v.id !== action.payload);

			case "UPDATE":
				// remove something from an index and replace that index with some other thing
				const indexToReplace = videos.findIndex(
					(v) => v.id === action.payload.id
				);
				const newVideos = [...videos];
				newVideos.splice(indexToReplace, 1, action.payload);
				setVideoToEdit(null);
				return newVideos;

			default:
				return videos;
		}
	}
	const [videos, dispatch] = useReducer(videoReducer, videosDB);

	function deleteVideo(id) {}

	function editVideo(id) {
		setVideoToEdit(videos.find((v) => v.id === id));
	}

	return (
		<>
			<div>
				<div className="add-video" style={{ marginBottom: "10px" }}>
					<span className="big-wrapper">
						<span className="play-btn">▶</span>
						<span className="namee">YouTube</span>
					</span>

					{/* Here we send the setter function as prop to the child */}
					{/* all the multiple props that was being passed in order to do are done by dispatch*/}
					<AddVideo
						dispatch={dispatch}
						videoToEdit={videoToEdit}
					/>
				</div>
				<VideoList
					dispatch={dispatch}
					editVideo={editVideo}
					videos={videos}
				/>
				{/* Here AddVideo and VideoList are siblings => they wanna pass the values ??? */}
				{/* AddVideo --> Parent --> does some modifications --> sends the data to VideoList (sibling) */}
				{/* Further down the passing of props is painful and difficult to pass */}
			</div>
		</>
	);
}

export default App;
