//custom hook for sessionStorage
import { useState, useEffect } from "react";

export default function useSessionStorage(key: string, initial: string): any {
	const [val, setVal] = useState(() => {
		const storedValue = sessionStorage.getItem(key);
		console.log("data retrieved from session storage");
		return storedValue ? storedValue : initial;
	});

	useEffect(() => {
		sessionStorage.setItem(key, val);
	}, [key, val]);

	return [val, setVal];
}
