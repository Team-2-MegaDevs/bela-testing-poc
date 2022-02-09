import { useAppContext } from "../../../context/contextHook";

const TestQuestion = ({
	question,
	setCheckedOption,
	questionID,
	checkedOption,
}) => {
	const { testStatus, userScore } = useAppContext();

	/**
	 * if status = "startP"
	 * " Welcome to BELA "
	 * if status = "firstQuestionP" or "midQuestionP" or "finalQuestionP"
	 * <Question/> + <Choices/>
	 * if status = "resultsP"
	 * <ResultData/>
	 */
	return (
		<div
			style={{
				height: "500px",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			{(() => {
				switch (testStatus) {
					case "startStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									marginTop: "50px",
									marginBottom: "50px",
									justifyContent: "center",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div> You can't pause the test</div>
								<div>
									{" "}
									If you exit the test, your progress will not be saved
								</div>
								<div> You must be in a quiet place</div>
								<div> You must do the test alone</div>
							</div>
						);
					case "firstQuestionStage":
					case "midQuestionStage":
					case "finalQuestionStage":
						// return (
						//   <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px', justifyContent: 'center', height:'400px' }}>
						//     <div>Choose ONE correct answer</div>
						//     <div>I live ______ London.</div>
						//     <div style={{ left: 0, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
						//       <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px', width:'90%' }}>Choice A</div>
						//       <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px', width:'90%' }}>Choice B</div>
						//       <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px', width:'90%' }}>Choice C</div>
						//       <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '10px', border: 'solid', borderRadius: '10px', margin: '5px', width:'90%' }}>Choice D</div>
						//     </div>
						//   </div>
						// );

						return (
							<>
								<div style={{ paddingBottom: "30px", fontSize: "30px" }}>
									{question && question[questionID].question}
								</div>
								<form>
									{question &&
										question[questionID].options.map((option, index) => (
											<div
												className='radio'
												key={index}
												style={{ display: "flex", justifyContent: "center" }}
											>
												<label
													style={{
														zIndex: 3,
														display: "flex",
														justifyContent: "flex-start",
														alignItems: "center",

														fontSize: "20px",
														width: "300px",
														borderRadius: "5px",
														marginBottom: "10px",
														border: "solid",
														paddingBottom: "10px",
														paddingTop: "10px",
													}}
												>
													<input
														style={{ marginRight: "10px", marginLeft: "10px" }}
														type='radio'
														value={index}
														checked={checkedOption === index ? true : false}
														onChange={() => setCheckedOption(index)}
													/>
													<div style={{ width: "100%" }}>{option}</div>
												</label>
											</div>
										))}
								</form>
							</>
						);
					case "resultStage":
						return (
							<div>
								<div>Your result is {userScore}% in Grammar</div>
							</div>
						);
					default:
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
								}}
							>
								<div> Instructions</div>
							</div>
						);
				}
			})()}
		</div>
	);
};

export default TestQuestion;
