import "./App.css";
import videosDB from "./data/video-data.json";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {
	const [videos, setVideos] = useState(videosDB);
	const [videoToEdit, setVideoToEdit] = useState(null);

	// function made to add the videos
	// This is passed as a prop to the child (since the fun is called here => we can verify things)
	function addVideofromChild(video) {
		setVideos([...videos, { ...video, id: videos.length + 1 }]);
	}

	function deleteVideo(id) {
		// check for the video with that id and do not include that
		setVideos(videos.filter((v) => v.id !== id));
	}

	function editVideo(id) {
		setVideoToEdit(videos.find((v) => v.id === id));
		// set this found id into the form child
		// there in from we have a set video
	}

	function updateVideo(vid) {
		// remove something from an index and replace that index with some other thing
		const indexToReplace = videos.findIndex((v) => v.id === vid.id);
		const newVideos = [...videos];
		newVideos.splice(indexToReplace, 1, vid); // this replaces one element
		setVideos(newVideos);
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
					<AddVideo
						videoSetter={addVideofromChild}
						updateVideo={updateVideo}
						videoToEdit={videoToEdit}
					/>
				</div>
				<VideoList
					deleteVideo={deleteVideo}
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
