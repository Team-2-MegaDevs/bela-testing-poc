import { useState, useEffect, useContext, createContext, React } from "react";
import { getDataFromDB, getAllSets } from "./firebase-utils";

const DataContext = createContext();

const DataProvider = props => {
	const [testType, setTestType] = useState("grammar");
	const [level, setLevel] = useState("A1");
	const [allSets, setAllSets] = useState([]);

	const [setOfQuestions, setQuestions] = useState([]);

	//getting the questions once the test starts
	useEffect(() => {
		getAllSets(testType, level).then(setList => {
			console.log(setList);
			setAllSets(setList);
			//getting a random set of questions inside the available sets
			const randomNumber = Math.floor(
				Math.random() * (setList.length - 1 + 1) + 1
			);
			console.log(randomNumber);
			//calling the function to get the actual set of questions once we have the
			// list of available sets
			getDataFromDB(testType, level, `set${randomNumber}`);
		});
	}, [level]);

	return (
		<DataContext.Provider value={{ setLevel, setOfQuestions }} {...props} />
	);
};

function useAppContext() {
	const context = useContext(DataContext);
	if (!context) throw new Error("Not inside the Provider");
	return context;
}

export { useAppContext, DataProvider };
