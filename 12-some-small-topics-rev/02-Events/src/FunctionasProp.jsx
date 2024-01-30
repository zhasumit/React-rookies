function Playbutton({ children, message = "Button", onSmash }) {
	function handleClick() {
		!onSmash ? console.log("btn clicked") : onSmash(); // direct prop of function is taken
	}
	function playClick() {
		console.log(message);
	}

	return (
		<div>
			{/*Event Handler function {() => console.log("play")}*/}
			<button onClick={handleClick}>{children}</button>
			<button onClick={playClick}>{children}</button>
		</div>
	);
}

export default Playbutton;
