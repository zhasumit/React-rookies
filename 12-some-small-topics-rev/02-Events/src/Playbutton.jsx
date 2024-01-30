function Playbutton({ children, message = "btn-clicked" }) {
	function handleClick() {
		console.log(message);
	}

	return (
		<div>
			{/*Event Handler function {() => console.log("play")}*/}
			<button onClick={handleClick}>{children}</button>
		</div>
	);
}

export default Playbutton;
