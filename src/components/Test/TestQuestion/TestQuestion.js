import { useAppContext } from "../../../context/contextHook";

const TestQuestion = ({
	question,
	setCheckedOption,
	questionID,
	checkedOption,
}) => {
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
					case "startStage":
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									paddingBottom: "10px",
									justifyContent: "center",
									alignItems: "center",
									height: "100px",
								}}
							>
								<div> Instructions</div>
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
								<h3>{question && question[questionID].question}</h3>
								<form>
									{question &&
										question[questionID].options.map((option, index) => (
											<div className='radio' key={index}>
												<label>
													<input
														type='radio'
														value={index}
														checked={checkedOption ? true : false}
														onChange={ev => {
															console.log(index);
															setCheckedOption(index);
														}}
													/>
													{option}
												</label>
											</div>
										))}
								</form>
							</>
						);

					case "resultStage":
						return (
							<div>
								<div>Your result is B in Grammar</div>
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
