import { useAppContext } from "../../../firebase/contextHook";
const TestQuestion = () => {
  const { testStatus } = useAppContext();
  /**
   * if status = "startP"
   * " Welcome to BELA "
   * if status = "firstQuestionP" or "midQuestionP" or "finalQuestionP"
   * <Question/> + <Choices/>
   * if status = "resultsP"
   * <ResultData/>
   */
  return (
    <div>
      {(() => {
        switch (testStatus) {
          case 'startStage':
            return (
              <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                <div> Instructions</div>
              </div>);
          case 'firstQuestionStage':
            return (
              <div>
                <div style={{ left: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice A</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice B</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice C</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice D</div>
                </div>
              </div>
            );
          case 'midQuestionStage':
            return (
              <div>
                <div style={{ left: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice A</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice B</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice C</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice D</div>
                </div>
              </div>
              );
          case 'finalQuestionStage':
            return (
              <div>
                <div style={{ left: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice A</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice B</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice C</div>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px' }}>Choice D</div>
                </div>
              </div>);
          case 'resultStage':
            return (
              <div>
                <div>Your result is B in Grammar</div>
              </div>);
          default:
            return (
              <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
                <div> Instructions</div>
              </div>);
        }

      })()}
    </div>
  );
}

export default TestQuestion;