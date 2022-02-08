import { useEffect } from "react";
import { useAppContext } from "../../../context/contextHook";
/**
 *  Start button click displays Next Question for first question
 *
 *  if questionCount = 1 | displays Next
 *
 *  if questionCount > 1 and qCount <10 | displays Prev, Next
 *
 *  if questionCount = 10 | display Prev, Submit
 *
 *
 */
const TestFooter = ({
	isCorrectAnswer,
	question,
	checkedOption,
	questionID,
}) => {
	const {
		testStatus,
		setTestStatus,
		testTakerProgress,
		testQuestionCount,
		setTestQuestionCount,
		maxQuestions,
	} = useAppContext();

	function startTest() {
		setTestQuestionCount(1);
	}
	async function nextQuestion() {
		setTestQuestionCount(testQuestionCount + 1);
		const correct = await isCorrectAnswer(checkedOption, question);
		testTakerProgress(questionID, correct);
		updateTestStatus();
		console.log(testQuestionCount);
	}
	function previousQuestion() {
		setTestQuestionCount(testQuestionCount - 1);
		updateTestStatus();
		console.log(testQuestionCount);
	}
	function updateTestStatus() {
		if (testQuestionCount === 1) {
			setTestStatus("firstQuestionStage");
		}
		if (testQuestionCount < maxQuestions && testQuestionCount > 1) {
			setTestStatus("midQuestionStage");
		} else if (testQuestionCount === maxQuestions) {
			setTestStatus("finalQuestionStage");
		}
	}
	function submitTest() {
		setTestQuestionCount(maxQuestions + 1);
		setTestStatus("resultStage");
	}
	function resetTest() {
		setTestStatus("startStage");
		setTestQuestionCount(0);
	}

	useEffect(() => {
		updateTestStatus();
	}, [testQuestionCount, maxQuestions, testStatus]);

	return (
		<div>
			{(() => {
				switch (testStatus) {
					case "startStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
									justifyContent: "center",
								}}
							>
								<button onClick={startTest}>Start Test</button>
							</div>
						);
					case "firstQuestionStage":
						return (
							<div
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
								}}
							>
								<button onClick={nextQuestion}>Next</button>
							</div>
						);
					case "midQuestionStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
								}}
							>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
									}}
								>
									<button onClick={previousQuestion}>Previous</button>
								</div>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "center",
									}}
								>
									<button onClick={nextQuestion}>Next</button>
								</div>
							</div>
						);
					case "finalQuestionStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
								}}
							>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
									}}
								>
									<button onClick={previousQuestion}>Previous</button>
								</div>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "center",
									}}
								>
									<button onClick={submitTest}>Submit</button>
								</div>
							</div>
						);
					case "resultStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
								}}
							>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
									}}
								>
									<button onClick={resetTest}>Back to Start</button>
								</div>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "center",
									}}
								>
									<button>Buy Certification</button>
								</div>
							</div>
						);
					default:
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
								}}
							>
								<button>Start Test</button>
							</div>
						);
				}
			})()}
		</div>
	);
};

export default TestFooter;
