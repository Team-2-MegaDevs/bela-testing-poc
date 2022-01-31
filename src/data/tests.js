// the variable tests represents the following structure on firestore
// tests collection > reading document > A2 collection > set1 document > questions field array
// questions are objects inside the array.

export const tests = {
	reading: {

	},
	grammar: {
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
			set2: {
				questions: [
					{
						question:
							"Choose the correct option",
						options: ["Where are you from?", "What is your from?", "What from are you?"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["He live on London", "He live in London", "He lives in London"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["I don't like coffee", "I doesn't like coffee", "I does like coffee"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["He goes to work in bus", "He goes to work by bus", "He goes to work by the bus"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["George has very big car", "George a very big car has", "George has a very big car"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Do you speak English?",
						options: ["Yes we do", "Yes we don't", "Yes they do"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["Look at the house over here", "Look at the house over there", "Look at the house under there"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["He Italian, he not Polish", "He is Italian, he isn't Polish", "They is Italian, they isn't Polish"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["What do you have breakfast?", "What do you have breakfast?", "Where breakfast you?"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["Where is the train station?", "What is train station?", "Where the train station is?"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				]
			},
			set3: {
				questions: [
					{
						question:
							"I can't find my keys. I don't know where ____ are.",
						options: ["it", "them", "they"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"A: \"Is he a teacher?\" B: \"Yes, he _____ .\"",
						options: ["is", "'s", "does"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"A: \"____ brush your teeth?\" B: \"Three times a day.\"",
						options: ["How often do you", "When you", "How often are you"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"We ____ have friends over for dinner.",
						options: ["often don't", "don't often", "don't never"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What are his hobbies?",
						options: ["He likes to play tennis.", "He tennis playing likes.", "He likes to playing tennis", "He tennis likes to play."],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ summer, I get up early ____ Sunday mornings.",
						options: ["In/in", "At/on", "In/on"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Please, can you stop making noise? I _____ a book.",
						options: ["'m reading", "read", "reading"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ suggar do you want in your tea?",
						options: ["How much", "How many", "What"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Peter is ____ player on the team.",
						options: ["the stronger", "the strongest", "the most strong"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I sat ____ on the couch and watched a documentary.",
						options: ["comfortable", "quiet", "comfortably"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				]
			},
			set4: {
				questions: [
					{
						question:
							"Tom ___ English.",
						options: ["is", "am", "ar", "be"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I didn't ___ TV last night.",
						options: ["watching", "watched", "not watched", "watch"],
						type: "single_choice",
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Look! The bus ___.",
						options: ["does leave", "is leaving", "leaving", "leaves"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ there a restaurant near here?",
						options: ["Is", "Do", "Are", "Have"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I've never ___ to England.",
						options: ["been", "going", "went", "go"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ to go out to an Italian restaurant tonight?",
						options: ["You like", "Would you like", "Are you liking", "Do you like"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"To get to the Post Office, ____ at the end of this road.",
						options: ["go over", "turn right", "go along", "go past"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Excuse me, ___ time please?",
						options: ["you have the", "what", "have you got the", "what is"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Dubai has ___ building in the world.",
						options: ["bigger", "the tallest", "tall", "the most tall"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I thikn I'v got a cold, I can't stop ___.",
						options: ["sneezing", "sneeze", "sneezing", "to sneeze"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				]
				
			},
			step5: {
				questions: [
					{
						question:
							"What ____ his name?",
						options: ["say", "is", "call"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"When _____?",
						options: ["they arrived", "did they arrived", "did they arrive"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Does he have _____?",
						options: ["any sisters", "any sister", "some sisters"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What _____ tommorow?",
						options: ["will you do", "do you do", "are you going to do"],
						type: "single_choice",
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I got up and had ____ breakfast very quickly because I was late.",
						options: ["is", "am", "ar", "be"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ any water in the fridge?",
						options: ["Is there", "There is", "Is"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["I drink whisky but i don't drink rum.", "I drink whisky but I not drink rum.", "I drink whisky but i doesn't drink rum"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Add these words to each group (matching)",
						options: ["Sun The Weather", "Sunday Days", "orange Colors", "rain The Weather", "Greek Nationalities"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"April Months",
						options: ["live in town.", "work in a bank.", "write a letter."],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["They like Pop but they don't like Rock.", "They like Pop but they not like Rock", "Rock they like not"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				]
			},
			step6: {
				questions: [
					{
						question:
							"Choose the correct option",
						options: ["Give me the book!", "The book me give!", "Give the book me!"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What time is it?",
						options: ["It's half past three.", "It's two hours thirty.", "It's two thirty.", "It's half past two."],
						type: "double_choice",
						correct_answer: [2,3],
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Choose the correct option",
						options: ["She eats Chinese food but she don't eat Vietnamese food.", "She eats Chinese food but she doesn't eat Vietnamese food.", "She eats Chinese food but not eat Vietnamese food."],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Add these words to each group (matching)",
						options: ["green Colors", "twelve Numbers", "Tuesday Days", "December Months", "Switzerland Countries", "snow The Weather"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"Add correct verbs (matching)",
						options: ["look at a picture", "ask a question", "speak English"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"____ five apples on the table.",
						options: ["Their is", "Their are", "There are", "There is"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"That's _____. It's very expensive.",
						options: ["Anna's car", "the car of Anna", "Anna car"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What is Jane doingg now?",
						options: ["She has a book reading.", "She's reading a book.", "She's a book reading.", "She reads a book."],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What did Helen do yesterday? She went to the shopping mall, but she ______ any clothes.",
						options: ["didn't bought", "didn't buy", "doesn't buy", "no buys"],
						type: "single_choice",
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I _____ talk on the phone now, because I'm driving.",
						options: ["no", "not", "can't", "don't"],
						type: "single_choice",
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				]
			}
		},
	},
};
