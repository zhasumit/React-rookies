import Video from "./Video";
import Button from "./Playbutton";

function VideoList({ videos, dispatch, editVideo }) {
	return (
		<>
			{videos.map((video) => (
				<Video
					key={video.id}
					id={video.id}
					src={video.src}
					title={video.title}
					channel={video.channel}
					views={video.views}
					time={video.time}
					verified={video.verified}
					dispatch={dispatch}
					// here we are doing prop drilling : pass prop to child for sake of passing
					editVideo={editVideo}
				>
					<div id="button">
						<Button
							message="player"
							onPlay={() => console.log("Playing ", video.title)}
							onPause={() => console.log("Paused ", video.title)}
						/>
					</div>
				</Video>
			))}
		</>
	);
}

export default VideoList;
