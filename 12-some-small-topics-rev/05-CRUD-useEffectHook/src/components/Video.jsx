import "./video.css";
function Video({
	src,
	title = "New Random video",
	id,
	channel = "Random User",
	views = Math.floor(Math.random() * (100000 - 4 + 1)) + 4,
	time = `${Math.floor(Math.random() * (60 - 4 + 1)) + 4} minutes ago`,
	verified = false,
	deleteVideo,
	editVideo,
	children,
}) {
	views = parseInt(views);
	// let channelName;
	// if (verified) channelName = <div className="channel">{channel} ✅</div>;
	// else channelName = <div className="channel">{channel}</div>;

	return (
		<>
			<div className="container">
				<button className="close" onClick={() => deleteVideo(id)}>
					{/* Since when video is added or removed done by video List controlledby App */}
					❌
				</button>
				<button className="edit" onClick={() => editVideo(id)}>
					✏️
				</button>
				{/* <button className="edit">✏️</button> */}
				<div className="pic">
					<img src={src} alt="yellow"></img>
				</div>
				<div className="title">{title}</div>
				{/* Method 1 : <div className="channel">{channel}</div>  */}
				{/* Method 2 : 
					{verified ? (
					<div className="channel">{channel} ✅</div>
				) : (
					<div className="channel">{channel}</div>
				)}
				 */}
				{/* Method 3 */}
				<div className="channel">
					{channel} {verified ? "✅" : null}
					{/* Method 3: {channel} {verified && "✅" 
				 	But here if there is any number instead of true false -> it shows up
					*/}
				</div>

				<div className="views">
					{views.toLocaleString("en-IN")} views <span>.</span> {time}
				</div>
				<div>{children}</div>
			</div>
		</>
	);
}

export default Video;
