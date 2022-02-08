import TestHeader from "./TestHeader/TestHeader";
import TestQuestion from "./TestQuestion/TestQuestion";
import TestFooter from "./TestFooter/TestFooter";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/contextHook";

const Test = () => {
	// Global Status variable to keep track of users position
	// status = "startStage" or firstQuestionStage or midQuestionStage, finalQuestionStage, resultsStage]

	const [question, setQuestion] = useState(null);
	const [questionID, setID] = useState("");
	const [checkedOption, setCheckedOption] = useState(null);

	const context = useAppContext();

	const { decryptQuestion, testTakerProgress, testQuestionCount } = context;

	useEffect(() => {
		//test for the first question
		const question = decryptQuestion(testQuestionCount);
		setQuestion(question);
		setID(Object.keys(question));
		console.log(question);
	}, []);

	useEffect(() => {
		console.log(checkedOption);
	}, [checkedOption]);

	function isCorrectAnswer(checkOpt, question) {
		const correctAnswer = question.correct_answer;
		if (correctAnswer === checkOpt) {
			return true;
		}

		return false;
	}

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					paddingBottom: "10px",
					maxWidth: "800px",
					width: "90%",
				}}
			>
				<TestHeader />
				<TestQuestion
					setCheckedOption={setCheckedOption}
					question={question}
					questionID={questionID}
				/>
				<TestFooter
					testTakerProgress={testTakerProgress}
					isCorrectAnswer={isCorrectAnswer}
					checkedOption={checkedOption}
					question={question}
					questionId={questionID}
				/>
			</div>
		</div>
	);
};

export default Test;
