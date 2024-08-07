// useEffect : React hook that tells React to DO some code when:
//              a. component mounting
//              b. component RE-renderings
//              c. State of a value

// useEffect(function, [dependencies])
// Another name of useEffect can be useSomeCode@mounting/rendering
// 1. useEffect(() => {})           // Re-rendering
// 2. useEffect(() => {}, [])       // Mounting code
// 3. useEffect(() => {}, [value])  // Mounting + Re-renders

// uses
// a. Event Listeners
// b. DOM manipulation
// c. Subscriptions REAL-TIME updates
// d. Fetching data from API
// e. Clean up at component unmounting
