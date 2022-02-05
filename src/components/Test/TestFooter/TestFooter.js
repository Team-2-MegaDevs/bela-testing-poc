import { useAppContext } from "../../../firebase/contextHook";
const TestFooter = () => {
    const { testStatus } = useAppContext();
/**
 * if status = "startP"
 * "Start Test" button
 * if status = "firstQuestionP"
 * "Next Question" button
 * if status = "midQuestionP"
 * "Previous Question" button + "Next Question" button 
 * if status = "finalQuestionP"
 * "Previous Question" button + "Submit Test" button 
 * if status = "resultsP"
 * "Buy Certificate" button
 */
    return (
        <div>
            {(() => {
                switch (testStatus) {
                    case 'startStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button>Start Test</button>
                            </div>);
                    case 'firstQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button>Next</button>
                            </div>);
                    case 'midQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button>Previous</button>
                                <button>Next</button>
                            </div>);
                    case 'finalQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button>Previous</button>
                                <button>Submit</button>
                            </div>);
                    case 'resultStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <div> These are your results</div>
                            </div>);
                    default:
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button>Start Test</button>
                            </div>);
                }
            
        })()}
        </div>
    );
}

export default TestFooter;