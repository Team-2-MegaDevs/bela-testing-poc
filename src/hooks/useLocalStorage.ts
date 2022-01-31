//custom hook for localStorage
import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, initial: string): any {
	const [val, setVal] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initial;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(val));
	}, [key, val]);

	return [val, setVal];
}
