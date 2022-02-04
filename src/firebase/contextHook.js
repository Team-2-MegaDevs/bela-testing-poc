import { useState, useEffect, useContext, createContext, React } from "react";
import {
	getDataFromDB,
	getAllSets,
	sendDataInBatch,
	addDataToDB,
	getQuestions,
} from "./firebase-utils";

const DataContext = createContext();

const DataProvider = props => {
	const [testType, setTestType] = useState("grammar");
	const [level, setLevel] = useState("A1");

	const [setOfQuestions, setQuestions] = useState([]);

	// (A1,A2,B1,B2,C1);
	// Grammar - 49 questions - Approximately 10 questions per level
	// Reading - 27 questions - Approximately 5 questions per level
	// Listening - 24 questions - Approximately 5 questions per level

	// fetching 10 A1 grammar questions once the app starts
	useEffect(() => {
		if (testType === "grammar") {
			getQuestions("grammarQuestions", "A1", 10).then(questions => {
				setQuestions(questions);
				console.log(questions);
			});
		}
		// getAllSets(testType, level).then(setList => {
		// 	console.log(setList);
		// 	setAllSets(setList);
		// 	//getting a random set of questions inside the available sets
		// 	const randomNumber = Math.floor(
		// 		Math.random() * (setList.length - 1 + 1) + 1
		// 	);
		// 	console.log(randomNumber);
		// 	//calling the function to get the actual set of questions once we have the
		// 	// list of available sets
		// 	getDataFromDB(testType, level, `set${randomNumber}`);
		// });
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
