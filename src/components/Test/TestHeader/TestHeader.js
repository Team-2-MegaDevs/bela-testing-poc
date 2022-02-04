import TestTimer from './TestTimer'
import TestStatusBar from './TestStatusBar'
import { useAppContext } from "../../firebase/contextHook";
const TestHeader = () => {
    const { testStatus } = useAppContext();
    /**
     * if status = "startStage"
     * " Welcome to BELA "
     * 
     * if testStatus = "firstQuestionStage" or "midQuestionStage" or "finalQuestionStage"
     * <Status bar/> + <Timer/>
     * if testStatus = "resultStage"
     * " This is your result"
     */
    return (

        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
            <div> Welcome to Bela</div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
            <div style={{ width: "50%", display: 'flex', flexDirection: 'row' }}>
                <button>Cancel Test</button>
            </div>
            <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                <TestStatusBar />
                <TestTimer />
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
            <div> These are your results</div>
        </div>
    );
}

export default TestHeader;