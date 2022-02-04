const TestQuestion = () => {
/**
 * if status = "startP"
 * " Welcome to BELA "
 * if status = "firstQuestionP" or "midQuestionP" or "finalQuestionP"
 * <Question/> + <Choices/>
 * if status = "resultsP"
 * <ResultData/>
 */
    return ( <div className="">
    <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px'}}>Question:</div>
    
    <div style={{ left: 0, display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice A</div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice B</div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice C</div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px'}}>Choice D</div>
    </div>
  </div> 
  );
}
 
export default TestQuestion;