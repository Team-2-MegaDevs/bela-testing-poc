import TestHeader from './TestHeader/TestHeader'
import TestQuestion from './TestQuestion/TestQuestion'
import TestFooter from './TestFooter/TestFooter'

const Test = () => {
    // Global Status variable to keep track of users position
    // status = "startStage" or firstQuestionStage or midQuestionStage, finalQuestionStage, resultsStage]
    // 
    
    
    return (
        <div style={{ display: 'flex', justifyContent:'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px', maxWidth:'800px', width:'90%' }}>
                <TestHeader />
                <TestQuestion />
                <TestFooter />
            </div>
        </div>
    );
}

export default Test;