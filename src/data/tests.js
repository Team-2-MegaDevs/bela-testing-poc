// the variable tests represents the following structure on firestore
// tests collection > reading document > A2 collection > set1 document > questions field array
// questions are objects inside the array.

export const tests = {
	reading: {
		A2: {
			set1: {
				questions: [
					{
						question:
							"Where do you live? I live ____London. Choose ONE correct answer.",
						options: ["in", "at", "on", "into"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "How old are you? Listen and choose ONE correct answer.",
						options: [
							"I have 37 years old",
							"I'm 37 years",
							"I'm 37 years old",
							"I 37 years old",
						],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I have a sister.______ name’s Jessica. Choose ONE correct answer.",
						options: ["He", "She", "His", " Her"],
						type: "single_choice",
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ are very happy with _____ new dog.",
						options: ["We / us", "We / our", "Us / our"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "These are _____.",
						options: [
							"my favorite shoes,",
							"my favorites shoes, ",
							"my shoes favorite.",
						],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I go to the gym ___ Tuesdays and Thursdays.",
						options: ["at", "in", "on"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ on the weekends?",
						options: ["Do you work", "Are you working", "Are you work"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "She _____ French, but she can speak German.",
						options: ["can't to speak", "can't speak", "doesn't can speak"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Put negatives. I drink whisky but _________ rum.",
						options: ["do drink rum", "not drink rum", "I don't drink"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
		},
	},
};
