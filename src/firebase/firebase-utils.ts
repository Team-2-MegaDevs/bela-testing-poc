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
	apiKey: `${process.env.REACT_APP_FIREBASE_STORAGE_KEY}`,
	authDomain: "speak-habla-poc.firebaseapp.com",
	projectId: "speak-habla-poc",
	storageBucket: "speak-habla-poc.appspot.com",
	messagingSenderId: "1068238770911",
	appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
});

const db = getFirestore();

// Add a new document with a generated id.
export async function addDataToDB(
	collectionName: string,
	document: string,
	subCollection: string,
	dataToAdd: Object
) {
	const docRef = await addDoc(
		collection(db, collectionName, document, subCollection),
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

export async function sendDataInBatch(
	collection: "string",
	document: "string",
	dataToAdd: object
) {
	// Get a new write batch
	const batch = writeBatch(db);

	// Set the value of reading'
	const docRef = doc(db, collection, document);
	batch.set(docRef, dataToAdd);

	// Commit the batch
	await batch.commit();
}

//this function allows us to get all the sets available for a specific testType and level
export const getAllSets = async (testType: string, level: string) => {
	const querySnapshot = await getDocs(collection(db, "tests", testType, level));
	let sets: string[] = [];
	querySnapshot.forEach(doc => {
		sets.push(doc.id);
	});

	return sets;
};
