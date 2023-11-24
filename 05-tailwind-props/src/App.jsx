import "./App.css";
import Card from "./components/Card";
function App() {
	return (
		<>
			<h1 className="bg-green-400 rounded-xl text-black p-4">
				Tailwind test
			</h1>
			<Card
				userName="Monkey D. Luffy"
				pic="https://imgs.search.brave.com/tkY9nhTdyz8-KjPTiYq12_5e9h-r9GQC0HbQ_pmXTJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMzLmFscGhhY29k/ZXJzLmNvbS8xMjUv/MTI1NTcxNS5qcGc"
				bannerWord="King of pirates"
			/>
			<Card
				userName="Vinsmoke Sanji"
				pic="https://w0.peakpx.com/wallpaper/270/55/HD-wallpaper-one-piece-sanji-one-piece.jpg"
				bannerWord="Finding all blue"
			/>
			<Card />
		</>
	);
}

export default App;
