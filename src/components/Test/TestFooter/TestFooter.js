import { useEffect } from "react";
import { useAppContext } from "../../../context/contextHook";
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
  const {
    testStatus,
    setTestStatus,
    testQuestionCount,
    setTestQuestionCount,
    maxQuestions,
    testTakerProgress,
  } = useAppContext();

  function startTest() {
    setTestQuestionCount(1);
  }
  function nextQuestion() {
    setTestQuestionCount(testQuestionCount + 1);
    updateTestStatus();
    console.log(testQuestionCount);
  }
  function previousQuestion() {
    setTestQuestionCount(testQuestionCount - 1);
    updateTestStatus();
    console.log(testQuestionCount);
  }
  function updateTestStatus() {
    if (testQuestionCount === 1) {
      setTestStatus("firstQuestionStage");
    }
    if (testQuestionCount < maxQuestions && testQuestionCount > 1) {
      setTestStatus("midQuestionStage");
    } else if (testQuestionCount === maxQuestions) {
      setTestStatus("finalQuestionStage");
    }
  }
  function submitTest() {
    setTestQuestionCount(maxQuestions + 1);
    setTestStatus("resultStage");
  }
  function resetTest() {
    setTestStatus("startStage");
    setTestQuestionCount(0);
  }

  useEffect(() => {
    console.log({ maxQuestions });
    updateTestStatus();
  }, [testQuestionCount, maxQuestions, testStatus]);

  return (
    <div>
      {(() => {
        switch (testStatus) {
          default:
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "10px",
                }}
              >
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Start Assessment
                </button>
              </div>
            );
          case "startStage":
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "10px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={startTest}
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Start Assessment
                </button>
              </div>
            );
          case "firstQuestionStage":
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={nextQuestion}
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Next
                </button>
              </div>
            );
          case "midQuestionStage":
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <button
                    onClick={previousQuestion}
                    style={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "5px",
                      backgroundColor: "black",
                      color: "white",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Previous
                  </button>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={nextQuestion}
                    style={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "5px",
                      backgroundColor: "black",
                      color: "white",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            );
          case "finalQuestionStage":
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <button onClick={previousQuestion} style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}>Previous</button>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <button onClick={submitTest} style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}>Submit</button>
                </div>
              </div>
            );
          case "resultStage":
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <button onClick={resetTest} style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}>Back to Start</button>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <button style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}>Buy Certification</button>
                </div>
              </div>
            );
        }
      })()}
    </div>
  );
};

export default TestFooter;
