const TestFooter = () => {
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingTop: '10px' }}>
            <button>NextQuestion</button>
        </div>
    );
}

export default TestFooter;