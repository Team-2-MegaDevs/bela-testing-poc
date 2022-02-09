import TestTimer from "./TestTimer";
import TestProgressBar from "./TestProgressBar";
import { useAppContext } from "../../../context/contextHook";
const TestHeader = () => {
	const { testStatus, setTestStatus, testQuestionCount, setTestQuestionCount } =
		useAppContext();
	const hoursMinSecs = { hours: 0, minutes: 40, seconds: 40 };

	function cancelTest() {
		setTestStatus("startStage");
		setTestQuestionCount(0);
	}
	return (
		<div>
			{(() => {
				switch (testStatus) {
					default:
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
									justifyContent: "center",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div style={{
									fontSize: '30px'
								}}> Assessment 1: Grammar and Vocabulary</div>
							</div>
						);

					case "startStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
									justifyContent: "center",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div style={{
									fontSize: '30px'
								}}> Assessment 1: Grammar and Vocabulary</div>
							</div>
						);
					case "firstQuestionStage":
					case "midQuestionStage":
					case "finalQuestionStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "row",
									}}
								>
									<button onClick={cancelTest} style={{width: '200px', height: '50px', borderRadius:'5px', backgroundColor: 'black', color: 'white', border: 'none', fontWeight: 'bold'}}>Cancel Test</button>
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
									<TestProgressBar />
									<TestTimer hoursMinSecs={hoursMinSecs} />
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
									justifyContent: "center",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div> These are your results</div>
							</div>
						);
				}
			})()}
		</div>
	);
};

export default TestHeader;
