import { CProgress, CProgressBar } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./TestProgressBarStyle.css";
import { useAppContext } from "../../../context/contextHook";

export default function TestProgressBar() {
	const context = useAppContext();

	const { testQuestionCount, maxQuestions } = context;
	let progressValue = (testQuestionCount / (maxQuestions + 1)) * 100;
	console.log(progressValue);
	return (
		<CProgress className='progress'>
			<CProgressBar color='success' value={progressValue} />
		</CProgress>
	);
}
