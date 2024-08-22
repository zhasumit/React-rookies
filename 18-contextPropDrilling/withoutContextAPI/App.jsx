import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    return (
        <>
            <Navbar count={count} />
            <div className="container">
                <div className="count">{count}</div>
                <button onClick={handleIncrement}>+</button>
            </div>
        </>
    );
}

export default App;
