// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	writeBatch,
	getDoc,
	getDocs,
} from "firebase/firestore";

// import { writeBatch, doc } from "firebase/firestore";
import { tests } from "../data/tests";

// Initialize Firebase
initializeApp({
	apiKey: "AIzaSyCHBFHNk2EwkmV_mzOWeEsNNlFQjcYjRHU",
	authDomain: "speak-habla-pof.firebaseapp.com",
	projectId: "speak-habla-pof",
	storageBucket: "speak-habla-pof.appspot.com",
	messagingSenderId: "647690134521",
	appId: "1:647690134521:web:a70bcea9d0ff255ec79328",
});

const db = getFirestore();

const testCollectionRef = collection(db, "test");

// Add a new document with a generated id.
export async function addDataToDB(
	collectionName: string,
	subCollection: string,
	dataToAdd: Object
) {
	const docRef = await addDoc(
		collection(db, collectionName, subCollection),
		dataToAdd
	);
	console.log("Document written with ID: ", docRef.id);
}

export async function getDataFromDB(
	testType: string,
	level: string,
	set: string
) {
	console.log(testType, level, set);
	const ref = await doc(collection(db, "tests"), testType, level, set);

	const snap = await getDoc(ref);

	if (snap.exists()) {
		console.log("Document data:", snap.data());
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}

	return snap.data();
}

export async function sendDataInBatch() {
	// Get a new write batch
	const batch = writeBatch(db);

	// Set the value of reading'
	const docRef = doc(testCollectionRef, "grammar", "A1", "set1");
	batch.set(docRef, tests.reading.A2.set1);

	// Commit the batch
	await batch.commit();
}

// working on the modify Answer functionality
// export async function modifyIsAnswered(questionId) {
// 	questions[questionId].isAnswered = true;
// }

//this function allows us to get all the sets available for a specific testType and level
export const getAllSets = async (testType: string, level: string) => {
	const querySnapshot = await getDocs(collection(db, "tests", testType, level));
	let sets: string[] = [];
	querySnapshot.forEach(doc => {
		sets.push(doc.id);
	});

	return sets;
};
