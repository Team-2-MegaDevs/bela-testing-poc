import { useAppContext } from "../../../firebase/contextHook";
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
const TestFooter = () => {
    const { testStatus, setTestStatus, testQuestionCount, setTestQuestionCount } = useAppContext();
    function startTest() {  
        setTestQuestionCount(testQuestionCount + 1)
        updateTestStatus()
        console.log(testQuestionCount)
    }
    function nextQuestion() {
        setTestQuestionCount(testQuestionCount + 1)
        updateTestStatus()
        console.log(testQuestionCount)
    }
    function previousQuestion() {
        setTestQuestionCount(testQuestionCount - 1)
        updateTestStatus()
        console.log(testQuestionCount)
    }
    function updateTestStatus(){
        if (testQuestionCount === 1){
            setTestStatus('firstQuestionStage')
        }
        if (testQuestionCount < 10 && testQuestionCount > 1){
            setTestStatus('midQuestionStage')
        }
        else if (testQuestionCount === 10){
            setTestStatus('finalQuestionStage')
        }
    }
    function submitTest() {
        setTestStatus('resultStage')
    }

    

    return (
        <div>
            {(() => {
                switch (testStatus) {
                    case 'startStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button onClick={startTest}>Start Test</button>
                            </div>);
                    case 'firstQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button  onClick={nextQuestion}>Next</button>
                            </div>);
                    case 'midQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button onClick={previousQuestion}>Previous</button>
                                <button onClick={nextQuestion}>Next</button>
                            </div>);
                    case 'finalQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <button onClick={previousQuestion}>Previous</button>
                                <button onClick={submitTest}>Submit</button>
                            </div>);
                    case 'resultStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                                <div> These are your results</div>
                                <button>Buy Certification</button>
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