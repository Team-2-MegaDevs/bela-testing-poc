import { useState, useEffect, useContext, createContext, React } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

import {
	getDataFromDB,
	getAllSets,
	sendDataInBatch,
	addDataToDB,
	getQuestions,
} from "../firebase/firebase-utils";

import { CryptoJS, AES, enc } from "crypto-js";

const DataContext = createContext();

const DataProvider = props => {
	const [testType, setTestType] = useState("grammar");
	const [level, setLevel] = useState("A1");

	const [setOfQuestions, setQuestions] = useSessionStorage("data", []);

	// (A1,A2,B1,B2,C1);
	// Grammar - 49 questions - Approximately 10 questions per level
	// Reading - 27 questions - Approximately 5 questions per level
	// Listening - 24 questions - Approximately 5 questions per level

	// fetching 10 A1 grammar questions once the app starts
	useEffect(() => {
		if (testType === "grammar") {
			getQuestions("grammarQuestions", "A1", 10).then(questions => {
				// stringfying and encrypting the object before saving to the section storage
				const encryptedQuestions = AES.encrypt(
					JSON.stringify(questions),
					`${process.env.REACT_APP_CRYPTO_KEY}`
				).toString();
				setQuestions(encryptedQuestions);
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

	//this function is used to access each individually question from session storage and decrypt it.
	function decryptQuestion(questionNumber) {
		const questions = sessionStorage.getItem("data");
		const bytes = AES.decrypt(questions, `${process.env.REACT_APP_CRYPTO_KEY}`);
		const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
		const question = decryptedData[questionNumber];

		console.log(question);

		return question;
	}

	return (
		<DataContext.Provider
			value={{ setLevel, setOfQuestions, decryptQuestion }}
			{...props}
		/>
	);
};

function useAppContext() {
	const context = useContext(DataContext);
	if (!context) throw new Error("Not inside the Provider");
	return context;
}

export { useAppContext, DataProvider };
