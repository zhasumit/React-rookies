import "./video.css";
function Video({
	src,
	title = "YOUTUBE video",
	channel = "sumitzha",
	views = 0,
	time = "now",
}) {
	views = parseInt(views);

	return (
		<>
			<div className="container">
				<div className="pic">
					<img src={src} alt="yellow"></img>
				</div>
				<div className="title">{title}</div>
				<div className="channel">{channel}</div>
				<div className="views">
					{views.toLocaleString("en-IN")} <span>.</span> {time}
				</div>
			</div>
		</>
	);
}

export default Video;
