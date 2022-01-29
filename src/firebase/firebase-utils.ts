// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp({
	apiKey: "AIzaSyCHBFHNk2EwkmV_mzOWeEsNNlFQjcYjRHU",
	authDomain: "speak-habla-pof.firebaseapp.com",
	projectId: "speak-habla-pof",
	storageBucket: "speak-habla-pof.appspot.com",
	messagingSenderId: "647690134521",
	appId: "1:647690134521:web:a70bcea9d0ff255ec79328",
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
