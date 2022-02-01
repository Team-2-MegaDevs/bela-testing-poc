// the variable tests represents the following structure on firestore
// tests collection > reading document > A2 collection > set1 document > questions field array
// questions are objects inside the array.

export const tests = {
	reading: {
		A1: {
			reading:
				"On Monday, Tom gets up at 7 o'clock. Then he reads his newspaper in the kitchen. He has breakfast at 8:30 and then he calls his boss in Scotland. In the afternoon, at 4:00, Tom plays tennis with his sister and after that, they eat dinner at a restaurant. At 6:00, Tom swims for one hour and then he goes by bike to his brother´s house. They talk and listen to music. Tom watches television in the evening and drinks a cup of warm tea. He goes to bed at 11.30.",
			option1: {
				questions: [
					{
						question: "Where does Tom have breakfast?",
						options: ["In the kitchen", "In his bedroom", "In the lounge"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Who does he call in the morning?",
						options: ["His sister", "His boss", "His brother"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "How long does Tom swim for?",
						options: ["One hour", "Two hours", "Six hours"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "How does Tom go to his brother's house?",
						options: ["By bike", "By car", "On foot"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What does Tom drink in the evening?",
						options: ["Wine", "Beer", "Tea"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What time does Tom go to bed?",
						options: ["11pm", "11:30pm", "Midnight"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			option2: {
				reading:
					"On Monday, Tom gets up at 7 o'clock. Then he reads his newspaper in the kitchen. He has breakfast at 8:30 and then he calls his boss in Scotland. In the afternoon, at 4:00, Tom plays tennis with his sister and after that, they eat dinner at a restaurant. At 6:00, Tom swims for one hour and then he goes by bike to his brother´s house. They talk and listen to music. Tom watches television in the evening and drinks a cup of warm tea. He goes to bed at 11.30.",
				questions: [
					{
						question: "Tom gets up at 7 am on Mondays.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},

					{
						question: "Tom reads the newspaper in the loung.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "His father lives in Scotland",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Tom plays tennis with his sister.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Tom and his sister eat before playing tennis.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Tom goes swimming at five o'clock.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			option3: {
				reading:
					"On Monday, Tom gets up at 7 o'clock. Then he reads his newspaper in the kitchen. He has breakfast at 8:30 and then he calls his boss in Scotland. In the afternoon, at 4:00, Tom plays tennis with his sister and after that, they eat dinner at a restaurant. At 6:00, Tom swims for one hour and then he goes by bike to his brother´s house. They talk and listen to music. Tom watches television in the evening and drinks a cup of warm tea. He goes to bed at 11.30.",
				questions: [
					{
						question: "Tom drinks a glass of wine in the evening.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},

					{
						question: "Tom goes to bed at 11:30pm.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Where does his boss live?",
						options: ["In England", "In his brother's house", "In Scotland"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What time does he play tennis with his sister?",
						options: ["4pm", "6pm", "11:40am"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Tom drives to his brother's house.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Tom and his brother listen to music.",
						options: ["True", "False"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			option4: {
				reading:
					"Famous people’s first jobs Not all famous people were born into famous families. A lot of them had normal lives before becoming famous. They also had jobs like the rest of us. Here are just a few: Former President Obama worked at an ice-cream parlor selling ice-cream cones. He was in high school in Honolulu, Hawaii and said it was quite hard. He also said that the job taught him about responsibility, hard work and how to spend time with work, friends and family. Brad Pitt had a weird job when he was younger. He worked as a chicken! That’s right. He worked at a restaurant called El Pollo Loco in Hollywood, and his job was to dress up like a chicken and wave at the cars on the road. In fact, if you go on a “See the Stars” tour in Hollywood, many of them will take you past the same restaurant where Brad used to work. Maybe the strangest path in life was that of Pope Francis. When he was young in Argentina, he worked several jobs before joining the Jesuits and dedicating his life to religion. He worked as a cleaner sweeping floors, a chemical tester at a laboratory and as a bouncer at a bar! Yes, the pope was the person responsible for security at a bar in case anything wrong happened. Can you imagine?!",
				questions: [
					{
						question: "Who helped protect people?",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},

					{
						question: "Who pretended to be an animal?",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Who learned a lot from their first job?",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Who worked in advertising?",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Who thought the job was difficult?",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Who had a couple of different jobs",
						options: ["President Obama", "Brad Pitt", "Pope Francis"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
		},
		A2: {
			reading:
				"Ancient robots <br> <br>What do you think of when you read the word ‘robot’? Many people think about big machines in car factories or futuristic monsters in films. Few of us think about the past. But people were building incredible machines with human abilities hundreds of years ago! <br> For example, Egyptian texts from 1100 BC mention moving statues which ‘chose’ the next king. None of these statues exists, but probably they were built using the ancient Egyptians’ mechanical technology.<br>Another ancient robot was a big robotic arm called “The Claw”. The ancient Greek writer Polybius wrote about it in 213 BC. It was built during a war with the Romans, and it hung over the city wall towards the sea. When a Roman ship came close, the arm picked up the front of the ship and lifted it into the air. Then the boat fell backwards into the sea and sank. Again, we don’t know if the machine was really built, but it was possible with Ancient Greek technology.<br> Another ancient Greek inventor, Philon of Byzantium, built a female robot at about the same time. If someone placed a cup in her hand, it mixed water and wine to make a drink. But the robot wasn’t popular because people didn’t need robots to work. They had lots of slaves. <br> The famous artist Leonardo da Vinci loved designing robots. Few of his ideas were built, but his plans are very detailed. One modern-day robot engineer, Mark Rosheim, still uses them to get ideas when designing robots for NASA! One of da Vinci’s robots was a lion. He built it for the king of France in 1515. It could walk and present flowers! In 2009, engineers used the plans to build it again. It worked perfectly. <br>After that, more and more mechanical robots were built. They did more and more difficult tasks, such as playing the flute, writing and drawing a picture. Although modern technology has moved on, these historical robots still amaze people today.",
			option1: {
				questions: [
					{
						question: "People used _____ against their enemy",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Some people built _____ again recently.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 4,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ use(s) ideas from hundreds of years ago.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ could make drinks for people.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "People didn’t need _____ because they had forced workers.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					
				],
			},
			option2: {
				reading:
				"Ancient robots <br> <br>What do you think of when you read the word ‘robot’? Many people think about big machines in car factories or futuristic monsters in films. Few of us think about the past. But people were building incredible machines with human abilities hundreds of years ago! <br> For example, Egyptian texts from 1100 BC mention moving statues which ‘chose’ the next king. None of these statues exists, but probably they were built using the ancient Egyptians’ mechanical technology.<br>Another ancient robot was a big robotic arm called “The Claw”. The ancient Greek writer Polybius wrote about it in 213 BC. It was built during a war with the Romans, and it hung over the city wall towards the sea. When a Roman ship came close, the arm picked up the front of the ship and lifted it into the air. Then the boat fell backwards into the sea and sank. Again, we don’t know if the machine was really built, but it was possible with Ancient Greek technology.<br> Another ancient Greek inventor, Philon of Byzantium, built a female robot at about the same time. If someone placed a cup in her hand, it mixed water and wine to make a drink. But the robot wasn’t popular because people didn’t need robots to work. They had lots of slaves. <br> The famous artist Leonardo da Vinci loved designing robots. Few of his ideas were built, but his plans are very detailed. One modern-day robot engineer, Mark Rosheim, still uses them to get ideas when designing robots for NASA! One of da Vinci’s robots was a lion. He built it for the king of France in 1515. It could walk and present flowers! In 2009, engineers used the plans to build it again. It worked perfectly. <br>After that, more and more mechanical robots were built. They did more and more difficult tasks, such as playing the flute, writing and drawing a picture. Although modern technology has moved on, these historical robots still amaze people today.",
				questions: [
					{
						question: "_____ could play a musical instrument.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 5,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "We don’t know if _____ and _____ were built. <br> <strong> Choose TWO correct answers</strong>",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 0 && 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "People used _____ when they needed a new king.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "People didn’t need _____ because they had forced workers.",
						options: ["Ancient Egyptian Statues", "The Claw", "IPhilon of Byzantium’s robot", "Mark Rosheim’s robots", "Leonardo da Vinci’s lion", "None of these robots"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					
				],
			},
	},
	grammar: {
		A1: {
			set1: {
				questions: [
					{
						question:
							"Where do you live? I live ____London. Choose ONE correct answer.",
						options: ["in", "at", "on", "into"],
						isMultipleChoice: false,
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
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I have a sister.______ name’s Jessica. Choose ONE correct answer.",
						options: ["He", "She", "His", " Her"],
						isMultipleChoice: false,
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ are very happy with _____ new dog.",
						options: ["We / us", "We / our", "Us / our"],
						isMultipleChoice: false,
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
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I go to the gym ___ Tuesdays and Thursdays.",
						options: ["at", "in", "on"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ on the weekends?",
						options: ["Do you work", "Are you working", "Are you work"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "She _____ French, but she can speak German.",
						options: ["can't to speak", "can't speak", "doesn't can speak"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Put negatives. I drink whisky but _________ rum.",
						options: ["do drink rum", "not drink rum", "I don't drink"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			set2: {
				questions: [
					{
						question: "Choose the correct option",
						options: [
							"Where are you from?",
							"What is your from?",
							"What from are you?",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"He live on London",
							"He live in London",
							"He lives in London",
						],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"I don't like coffee",
							"I doesn't like coffee",
							"I does like coffee",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"He goes to work in bus",
							"He goes to work by bus",
							"He goes to work by the bus",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"George has very big car",
							"George a very big car has",
							"George has a very big car",
						],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Do you speak English?",
						options: ["Yes we do", "Yes we don't", "Yes they do"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"Look at the house over here",
							"Look at the house over there",
							"Look at the house under there",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"He Italian, he not Polish",
							"He is Italian, he isn't Polish",
							"They is Italian, they isn't Polish",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"What do you have breakfast?",
							"What do you have breakfast?",
							"Where breakfast you?",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"Where is the train station?",
							"What is train station?",
							"Where the train station is?",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			set3: {
				questions: [
					{
						question: "I can't find my keys. I don't know where ____ are.",
						options: ["it", "them", "they"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: 'A: "Is he a teacher?" B: "Yes, he _____ ."',
						options: ["is", "'s", "does"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: 'A: "____ brush your teeth?" B: "Three times a day."',
						options: ["How often do you", "When you", "How often are you"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "We ____ have friends over for dinner.",
						options: ["often don't", "don't often", "don't never"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What are his hobbies?",
						options: [
							"He likes to play tennis.",
							"He tennis playing likes.",
							"He likes to playing tennis",
							"He tennis likes to play.",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ summer, I get up early ____ Sunday mornings.",
						options: ["In/in", "At/on", "In/on"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Please, can you stop making noise? I _____ a book.",
						options: ["'m reading", "read", "reading"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ suggar do you want in your tea?",
						options: ["How much", "How many", "What"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Peter is ____ player on the team.",
						options: ["the stronger", "the strongest", "the most strong"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I sat ____ on the couch and watched a documentary.",
						options: ["comfortable", "quiet", "comfortably"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			set4: {
				questions: [
					{
						question: "Tom ___ English.",
						options: ["is", "am", "ar", "be"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I didn't ___ TV last night.",
						options: ["watching", "watched", "not watched", "watch"],
						isMultipleChoice: false,
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Look! The bus ___.",
						options: ["does leave", "is leaving", "leaving", "leaves"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ there a restaurant near here?",
						options: ["Is", "Do", "Are", "Have"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I've never ___ to England.",
						options: ["been", "going", "went", "go"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ to go out to an Italian restaurant tonight?",
						options: [
							"You like",
							"Would you like",
							"Are you liking",
							"Do you like",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"To get to the Post Office, ____ at the end of this road.",
						options: ["go over", "turn right", "go along", "go past"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Excuse me, ___ time please?",
						options: ["you have the", "what", "have you got the", "what is"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Dubai has ___ building in the world.",
						options: ["bigger", "the tallest", "tall", "the most tall"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I thikn I'v got a cold, I can't stop ___.",
						options: ["sneezing", "sneeze", "sneezing", "to sneeze"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			set5: {
				questions: [
					{
						question: "What ____ his name?",
						options: ["say", "is", "call"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "When _____?",
						options: ["they arrived", "did they arrived", "did they arrive"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Does he have _____?",
						options: ["any sisters", "any sister", "some sisters"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What _____ tommorow?",
						options: ["will you do", "do you do", "are you going to do"],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"I got up and had ____ breakfast very quickly because I was late.",
						options: ["is", "am", "ar", "be"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ any water in the fridge?",
						options: ["Is there", "There is", "Is"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"I drink whisky but i don't drink rum.",
							"I drink whisky but I not drink rum.",
							"I drink whisky but i doesn't drink rum",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Add these words to each group (matching)",
						options: [
							"Sun The Weather",
							"Sunday Days",
							"orange Colors",
							"rain The Weather",
							"Greek Nationalities",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "April Months",
						options: ["live in town.", "work in a bank.", "write a letter."],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"They like Pop but they don't like Rock.",
							"They like Pop but they not like Rock",
							"Rock they like not",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
			set6: {
				questions: [
					{
						question: "Choose the correct option",
						options: [
							"Give me the book!",
							"The book me give!",
							"Give the book me!",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What time is it?",
						options: [
							"It's half past three.",
							"It's two hours thirty.",
							"It's two thirty.",
							"It's half past two.",
						],
						isMultipleChoice: true,
						correct_answer: [2, 3],
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Choose the correct option",
						options: [
							"She eats Chinese food but she don't eat Vietnamese food.",
							"She eats Chinese food but she doesn't eat Vietnamese food.",
							"She eats Chinese food but not eat Vietnamese food.",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Add these words to each group (matching)",
						options: [
							"green Colors",
							"twelve Numbers",
							"Tuesday Days",
							"December Months",
							"Switzerland Countries",
							"snow The Weather",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Add correct verbs (matching)",
						options: ["look at a picture", "ask a question", "speak English"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "____ five apples on the table.",
						options: ["Their is", "Their are", "There are", "There is"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "That's _____. It's very expensive.",
						options: ["Anna's car", "the car of Anna", "Anna car"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "What is Jane doing now?",
						options: [
							"She has a book reading.",
							"She's reading a book.",
							"She's a book reading.",
							"She reads a book.",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"What did Helen do yesterday? She went to the shopping mall, but she ______ any clothes.",
						options: ["didn't bought", "didn't buy", "doesn't buy", "no buys"],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "I _____ talk on the phone now, because I'm driving.",
						options: ["no", "not", "can't", "don't"],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
		},
	},
};
