import TestTimer from './TestTimer'
import TestStatusBar from './TestStatusBar'
import { useAppContext } from "../../../context/contextHook";
const TestHeader = () => {
    const { testStatus, setTestStatus, testQuestionCount, setTestQuestionCount } = useAppContext();
    function cancelTest() {
        setTestStatus('startStage')
        setTestQuestionCount(0)
    }
    return (
        <div>
            {(() => {
                switch (testStatus) {
                    
                    case 'startStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', justifyContent:'center', alignItems: 'center', height:'100px' }} >
                                <div > Welcome to Bela</div>
                            </div>);
                    case 'firstQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', alignItems: 'center', height:'100px' }} >
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row' }}>
                                    <button onClick = {cancelTest}>Cancel Test</button>
                                </div>
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                                    <TestStatusBar />
                                    <TestTimer />
                                </div>
                            </div>);
                    case 'midQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', alignItems: 'center', height:'100px' }} >
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row' }}>
                                    <button>Cancel Test</button>
                                </div>
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                                    <TestStatusBar />
                                    <TestTimer />
                                </div>
                            </div>);
                    case 'finalQuestionStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', alignItems: 'center', height:'100px' }} >
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row' }}>
                                    <button>Cancel Test</button>
                                </div>
                                <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                                    <TestStatusBar />
                                    <TestTimer />
                                </div>
                            </div>);
                    case 'resultStage':
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', justifyContent:'center', alignItems: 'center', height:'100px' }} >
                                <div> These are your results</div>
                            </div>);
                    
                }
            
        })()}
        </div>

        
    );
}

export default TestHeader;