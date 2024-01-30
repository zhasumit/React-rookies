import "./App.css";
import Video from "./components/video";

function App() {
	return (
		<>
			<Video
				src="https://images.unsplash.com/photo-1563178987-e7bafa3db384"
				title="pile fool"
				channel="Nature garden"
				views="190482"
				time="one month ago"
			/>
			<Video
				src="https://plus.unsplash.com/premium_photo-1706281895733-b685a6435d27"
				title="Mark ur assignments"
				channel="Assignment Bro"
				views="890"
				time="one minute ago"
			/>
			<Video
				src="https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab"
				title="Bring it on"
				channel="Toofan"
				views="89890"
				time="2 years ago"
			/>
			<Video
				src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3"
				title="Turtuling"
				channel="Sea beasting"
        views="2384032"
				time="12 years ago"
			/>
			<Video
				src="https://images.unsplash.com/photo-1703400049964-4622ed5be93e"
				title="sparrow festival in my backyard"
				channel="Nature garden"
        views="12384032"
				time="4 years ago"
			/>
		</>
	);
}

export default App;
