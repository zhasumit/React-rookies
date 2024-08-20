import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    let a = 0;

    useEffect(() => {
        a = a + 1;
        // since on every render the value is reinitialised since the function is reinitialised
        // values donot persist on rerenders and the value is 1 only (NO CHANGES)
        console.log(`a: ${a}`);
    });

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
