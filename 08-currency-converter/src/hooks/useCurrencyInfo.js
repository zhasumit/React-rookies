import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
	// simple data to load the value of conversion rate
	const [data, setData] = useState({});
	// have put{} into the useState => no error for fetch error

	// when loaded then call the API (when component is mounted or tweaked)
	// useEffect is called as the lifetime of the depency is triggered
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
		)
			.then((res) => res.json())
			.then((res) => setData(res[currency]));
	}, [currency]);
	// then is simply used for responce chaining
	// gets triggered when currency is effected

	return data;
}

// returning the entire hook
export default useCurrencyInfo;
