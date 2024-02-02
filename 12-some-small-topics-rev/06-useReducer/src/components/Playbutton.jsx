import { useState } from "react";

function Playbutton({ children, onPlay, onPause }) {
	let [playing, setPlaying] = useState(false);
	function handleClick(e) {
		// console.log(e);
		e.stopPropagation(); // this stops event propagation
		playing ? onPause() : onPlay();
		setPlaying(!playing);
	}

	return (
		<div>
			{/*Event Handler function {() => console.log("play")}*/}
			<button style={{fontWeight:"bold"}} onClick={handleClick}>{playing ? "| |" : "▶"}</button>
		</div>
	);
}

export default Playbutton;
