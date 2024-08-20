import { useEffect, useRef, useState } from "react";
import "./App.css";

function AppWithRef() {
    const [count, setCount] = useState(0);
    let a = useRef(0);

    useEffect(() => {
        a.current += 1;
        // on every rerender the value is changed since objects current holds persists the value
        // valueis persisted across the rerenders and accessed using object of ref with current
        console.log(`a: ${a.current}`); // in strict mode things are done in two phases
        // on ref change component is not rerendered 
    });

    // we can also point to some element to make changes in DOM
    // REF manipulates without rendering the value
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

export default AppWithRef;
