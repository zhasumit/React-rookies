import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

// so nums contains array with one magical number
const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_999_222,
    };
});

function App() {
    const [count, setCount] = useState(0);

    const [numbers, setNumbers] = useState(nums);
    // const magical = numbers.find((item) => item.isMagical); //expensive computation (takes time)
    const magical = useMemo(
        () => numbers.find((item) => item.isMagical),
        [numbers]
    );

    // as the componenet is rerendered the entire dom is painted and it is expensive operation
    // useMemo is used for memoization for keep account of some memory, and recompute only at some changes
    // recomputation only at the time of the dependecy array
    return (
        <>
            <div className="magicalNum">
                <span className="magicalNumber"><span className="yellow">☄</span> {magical.index}</span>
            </div>

            <div className="count">{count}</div>
            <div>
                <button
                    onClick={() => {
                        setCount((count) => count + 1);
                        // at count 10 change the numbers and magical number -> useMemo to revise things at setNumbers
                        if (count === 10)
                            setNumbers(
                                new Array(10_000_000).fill(0).map((_, i) => {
                                    return {
                                        index: i,
                                        isMagical: i === 8_497_234,
                                    };
                                })
                            );
                    }}
                >
                    +
                </button>
            </div>
        </>
    );
}

export default App;
