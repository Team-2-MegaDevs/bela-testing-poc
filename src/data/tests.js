// the variable tests represents the following structure on firestore
// tests collection > reading document > A2 collection > set1 document > questions field array
// questions are objects inside the array.

export const tests = {
	reading: {
		A1: {
			
			set1: {
				reading:
				"On Monday, Tom gets up at 7 o'clock. Then he reads his newspaper in the kitchen. He has breakfast at 8:30 and then he calls his boss in Scotland. In the afternoon, at 4:00, Tom plays tennis with his sister and after that, they eat dinner at a restaurant. At 6:00, Tom swims for one hour and then he goes by bike to his brother´s house. They talk and listen to music. Tom watches television in the evening and drinks a cup of warm tea. He goes to bed at 11.30.",
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
			set2: {
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
			set3: {
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
			set4: {
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
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "Some people built _____ again recently.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 4,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ use(s) ideas from hundreds of years ago.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 3,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "_____ could make drinks for people.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"People didn’t need _____ because they had forced workers.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
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
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 5,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"We don’t know if _____ and _____ were built. <br> <strong> Choose TWO correct answers</strong>",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 0 && 1,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question: "People used _____ when they needed a new king.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 0,
						isAnswered: false,
						mediaURL: null,
					},
					{
						question:
							"People didn’t need _____ because they had forced workers.",
						options: [
							"Ancient Egyptian Statues",
							"The Claw",
							"IPhilon of Byzantium’s robot",
							"Mark Rosheim’s robots",
							"Leonardo da Vinci’s lion",
							"None of these robots",
						],
						isMultipleChoice: false,
						correct_answer: 2,
						isAnswered: false,
						mediaURL: null,
					},
				],
			},
		},
	},
};
