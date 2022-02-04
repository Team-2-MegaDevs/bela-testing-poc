import TestHeader from './TestHeader/TestHeader'
import TestQuestion from './TestQuestion/TestQuestion'
import TestFooter from './TestFooter/TestFooter'

const Test = () => {
    // Global Status variable to keep track of users position
    // status = "startStage" or firstQuestionStage or midQuestionStage, finalQuestionStage, resultsStage]
    // 
    
    return (
        <div>
            <div>
                <TestHeader status={testStatus}/>
                <TestQuestion status={testStatus}/>
                <TestFooter status={testStatus}/>
            </div>
        </div>
    );
}

export default Test;