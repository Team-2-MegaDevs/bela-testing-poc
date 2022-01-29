// Import the functions you need from the SDKs you need
import { map } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	writeBatch,
	query,
	where,
	getDoc,
} from "firebase/firestore";

// import { writeBatch, doc } from "firebase/firestore";
import { tests } from "../data/tests";

// Initialize Firebase
initializeApp({
	apiKey: `${process.env.REACT_APP_FIREBASE_STORAGE_KEY}`,
	authDomain: "speak-habla-pof.firebaseapp.com",
	projectId: "speak-habla-pof",
	storageBucket: "speak-habla-pof.appspot.com",
	messagingSenderId: "647690134521",
	appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
});

const db = getFirestore();

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

export async function getDataFromDB(level: string, set: string) {
	const ref = await doc(collection(db, "tests"), "reading", level, set);

	const snap = await getDoc(ref);

	if (snap.exists()) {
		console.log("Document data:", snap.data());
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
}

// export async function getCollection() {
// 	const collectionRef = await collection(db, "tests");

// 	const docRef = doc(collectionRef, "w3OVh0vuyAzuNXkaUOc5")

// 	console.log(collectionRef);

// // const data = await getDocs("tests");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
// 	console.log("Document data:", docSnap.data());
// } else {
// 	// doc.data() will be undefined in this case
// 	console.log("No such document!");
// }

export async function sendDataInBatch() {
	// Get a new write batch
	const batch = writeBatch(db);

	// Set the value of reading'
	const docRef = doc(db, "tests", "reading", "A2", "set1");
	batch.set(docRef, tests.reading.A2.set1);

	// Commit the batch
	await batch.commit();
}

// export async function getDataFromDB() {
// 	const docRef = await doc(db, "tests", "w3OVh0vuyAzuNXkaUOc5");

// 	// const data = await getDocs("tests");
// 	const docSnap = await getDoc(docRef);

// 	if (docSnap.exists()) {
// 		console.log("Document data:", docSnap.data());
// 	} else {
// 		// doc.data() will be undefined in this case
// 		console.log("No such document!");
// 	}
// }
