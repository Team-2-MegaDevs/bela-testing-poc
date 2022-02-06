import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/contextHook";

export default function Test() {
	const [question, setQuestion] = useState(null);
	const [questionID, setID] = useState("");
	const [checkedOption, setCheckedOption] = useState(null);

	const context = useAppContext();

	const { decryptQuestion, testTakerProgress } = context;

	useEffect(() => {
		//test for the first question
		const question = decryptQuestion(4);
		setQuestion(question);
		setID(Object.keys(question));
		console.log(question);
	}, []);

	function handleForm(ev) {
		ev.preventDefault();
		//correct answer needs validation, this is just a test to make sure
		// progress is being saved correctly. We are assuming the user's answer is correct on this test
		testTakerProgress(questionID, true);
	}

	return (
		<div>
			{question && (
				<>
					<p>This is the the question ID: {questionID}</p>
					<h3>{question[questionID].question}</h3>
					<form onSubmit={handleForm}>
						{question[questionID].options.map((option, index) => (
							<div className='radio' key={index}>
								<label>
									<input
										type='radio'
										value={index}
										checked={checkedOption === index ? true : false}
										onChange={() => {
											console.log(index);
											setCheckedOption(index);
										}}
									/>
									{option}
								</label>
							</div>
						))}
						<button type='submit'> Submit Question</button>
					</form>
				</>
			)}
		</div>
	);
}
