import "./App.css";
import Video from "./components/Video";
import videos from "./data/video-data.json"

function App() {
	return (
		<>
			<div>
				{videos.map((video) => (
					<Video
						key={video.id}
						src={video.src}
						title={video.title}
						channel={video.channel}
						views={video.views}
						time={video.time}
						verified={video.verified}
					/>
				))}
			</div>
		</>
	);
}

export default App;
