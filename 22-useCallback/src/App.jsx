import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [adjective, setAdjective] = useState("good");

    // const getAdjective = () => {
    //   return "another" + count
    // }

    // Avoid component or function rerenders 
    // Here the function is freezed and then only takes care of change in count2
    // As useMemo is used to memoize computations, useCallback is used to freeze functions
    const getAdjective = useCallback(() => {
        return "another" + count;
    }, [count2]);

    return (
        <>
            <Navbar adjective={"good"} getAdjective={getAdjective} />
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
