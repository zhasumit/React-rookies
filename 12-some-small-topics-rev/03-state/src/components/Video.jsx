import "./video.css";
function Video({
	src,
	title = "New Random video",
	channel = "Random User",
	views = 0,
	time = "now",
	verified = false,
	children,
}) {
	views = parseInt(views);
	// let channelName;
	// if (verified) channelName = <div className="channel">{channel} ✅</div>;
	// else channelName = <div className="channel">{channel}</div>;

	return (
		<>
			<div className="container">
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
					{views.toLocaleString("en-IN")} <span>.</span> {time}
				</div>
				<div>{children}</div>
			</div>
		</>
	);
}

export default Video;
