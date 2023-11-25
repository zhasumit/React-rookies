import { useState, useCallback, useEffect, useRef } from "react";

// useState => used to tinker the value of a variable using setMethod and reflect in UI
// useCallback => used to change and optimise the methods to be performed upon the dependency variables
// useEffect => used to change the values if any dependency is changed
// useRef => used to take the reference of any variable or a part (based on given parameters)

// ============================================================================================

function App() {
	// simple parameters to be looked upon => tinker the password
	const [length, setLength] = useState(8);
	const [nums, setNumsAllow] = useState(false);
	const [char, setCharAllow] = useState(false);
	const [password, setPassword] = useState("");

	// generate password with some methods based on some selections
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		// check for the dependencies and add more values to randomise from
		if (nums) str += "0123456789";
		if (char) str += "!@#$%^&*-_+=[]{}~`";

		// iterate the entire string and select random value to add to the password string
		for (let i = 1; i < length; i++) {
			let character = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(character);
		}

		setPassword(pass);
	}, [length, nums, char, setPassword]);
	// useCallback for methods related to the dependency values
	// useCallback changes on every change of dependency values
	// if password is given instead of setPassword with every concatination it changes
	// this makes it infinite loop

	// ============================================================================================

	// work on callback and dependency array (sync component with an external system)
	// Takes effect on any dependencies change and callbacks the function
	// this basically runs the password generator if any of the fields is changed
	useEffect(() => {
		passwordGenerator();
	}, [length, char, nums, passwordGenerator]);
	// This is changed if any value of the dependency is changed

	// ============================================================================================
	// useRef
	const passwordRef = useRef(null); // no reference taken untill now
	// ref = {passwordRef} is used to take the reference in the password (input field)
	// since copy button and password are interrelated a callBack hook is associated with func ref

	const copyPasswordToClipboard = useCallback(() => {
		// copy to clipboard (since we are working on frontend not server window object will be available)
		window.navigator.clipboard.writeText(password);

		// taking reference of passwordRef ? is taken for optionality (value can/cannot be present)
		passwordRef.current?.select(); // => select the value when copied

		// select range of selection
		passwordRef.current?.setSelectionRange(0, 99); // => select the value when copied
	}, [password]);

	// ============================================================================================
	return (
		<>
			<div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-600 bg-gray-800 text-xl font-medium">
				<h1 className="text-white text-center">Password Generator</h1>
				<div className="flex shadown rounded-lg overflow-hidden mb-4 my-3 text-black">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 text-blue-1000 text-lg"
						placeholder="password"
						readOnly
						ref={passwordRef}
					/>
					<button
						className="outline-none bg-blue-700 text-white px-5 py-1 shrink-0 hover:bg-blue-900"
						onClick={copyPasswordToClipboard}
					>
						copy
					</button>
				</div>
				<div className="flex text-sm gap-x-3">
					<div className="flex text-sm gap-x-3"></div>
					<input
						type="range"
						min={6}
						max={99}
						value={length}
						className="cursor-pointer"
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label>Length: {length}</label>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={nums}
							id="numberInput"
							onChange={() => {
								// reverse the previous value
								setNumsAllow((prev) => !prev);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={nums}
							id="charInput"
							onChange={() => {
								// reverse the previous value
								setCharAllow((prev) => !prev);
							}}
						/>
						<label htmlFor="charInput">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
