function Playbutton({ children, onPlay, onPause }) {
	let playing = false;
	function handleClick() {
		playing ? onPause() : onPlay();
		playing = !playing;
	}

	return (
		<div>
			{/*Event Handler function {() => console.log("play")}*/}
			<button onClick={handleClick}>{children}</button>
		</div>
	);
}

export default Playbutton;
