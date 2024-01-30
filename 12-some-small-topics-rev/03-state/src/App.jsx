import "./App.css";
import Video from "./components/Video";
import videosDB from "./data/video-data.json";
import Button from "./components/Playbutton";
import { useState } from "react";
function App() {
	const [videos, setVideos] = useState(videosDB);

	return (
		<>
			<div>
				<div className="add-video" style={{ marginBottom: "10px" }}>
					<span className="big-wrapper">
						<span className="play-btn">▶</span>
						<span className="namee">YouTube</span>
					</span>
					<button
						onClick={() => {
							setVideos([
								...videos,
								{
									id: videos.length + 1,
									src: "https://images.unsplash.com/photo-1620924049153-4d32fcbe88fe",
								},
							]);
						}}
					>
						➕ video
					</button>
				</div>
				{videos.map((video) => (
					<Video
						key={video.id}
						src={video.src}
						title={video.title}
						channel={video.channel}
						views={video.views}
						time={video.time}
						verified={video.verified}
					>
						<div id="button">
							<Button
								message="player"
								onPlay={() =>
									console.log("Playing ", video.title)
								}
								onPause={() =>
									console.log("Paused ", video.title)
								}
							/>
						</div>
					</Video>
				))}
			</div>
		</>
	);
}

export default App;
