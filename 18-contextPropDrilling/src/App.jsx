import { useState } from "react";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/counterContext";

function App() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    return (
        <>
            {/* provider wrapping is done to provide context to all the child components */}
            {/* since the value of the Provider is count so it can be extracted using useContext */}
            <counterContext.Provider value={{ count, setCount }}>
                <Navbar count={count} />
                <div className="container">
                    <div className="count">{count}</div>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </counterContext.Provider>
        </>
    );
}

export default App;
