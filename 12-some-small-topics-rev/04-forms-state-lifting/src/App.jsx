import "./App.css";
import videosDB from "./data/video-data.json";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {
	const [videos, setVideos] = useState(videosDB);

	// function made to add the videos
	// This is passed as a prop to the child (since the fun is called here => we can verify things)
	function addVideofromChild(video) {
		setVideos([...videos, { ...video, id: videos.length + 1 }]);
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
					<AddVideo videoSetter={addVideofromChild} />
				</div>
				<VideoList videos={videos} />
				{/* Here AddVideo and VideoList are siblings => they wanna pass the values ??? */}
				{/* AddVideo --> Parent --> does some modifications --> sends the data to VideoList (sibling) */}
				{/* Further down the passing of props is painful and difficult to pass */}
			</div>
		</>
	);
}

export default App;
