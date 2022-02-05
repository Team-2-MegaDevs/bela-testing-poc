import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/contextHook";

export default function Test() {
	const [question, setQuestion] = useState({});
	const [questionID, setID] = useState("");

	const context = useAppContext();

	const { decryptQuestion } = context;

	useEffect(() => {
		//test for the first question
		const question = decryptQuestion(2);
		setQuestion(question);
		setID(Object.keys(question));
		console.log(question);
	}, []);

	return (
		<div>
			{question && (
				<>
					<p>This is the the question ID: {question && questionID}</p>
					<h3>{question[questionID].question}</h3>
				</>
			)}
		</div>
	);
}
