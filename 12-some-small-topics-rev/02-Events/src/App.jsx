import "./App.css";
// import Button from "./Playbutton";
// import Button from "./FunctionasProp";
import Button from "./MultipleEventHandling";

function App() {
	return (
		<>
			{/*
			This is for the normal buttons with the children as Play and Pause
			message here is the prop to be passed for some message on console
				<Button message="Play-message">Play</Button>
				<Button message="pause-message">Pause</Button>
				<Button>Btn</Button>
			*/}

			{/*
			Passing function as prop in Button
				<Button onSmash={() => console.log("playyyyy")} message="player">Play</Button>
				<Button onSmash={() => alert("Pauuseee")} message="Pauseeee">Pause</Button>
				<Button>Btn</Button>
			*/}

			<div>
				{/* Passing function as prop in Button */}
				<Button
					message="player"
					onPlay={() => console.log("Play")}
					onPause={() => console.log("Pause")}
				>
					Play
				</Button>
			</div>
		</>
	);
}

export default App;
