import { useState } from "react";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState("Sumit");
    const handleClick = () => alert("You clicked the click Me button 🫣");
    const handleMouseHover = () => alert("⛔Get out of the restricted area 🚫");
    const handleInputChange = (e) => setInputValue(e.target.value);

    return (
        <>
            <div className="card">
                <button onClick={handleClick}>click me!</button>
                <div onMouseEnter={handleMouseHover} className="noHoverCard">
                    NO HOVERING ✈️
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
}

export default App;
