import React, { useEffect } from "react";
//@ts-ignore
import logo from "./logo.svg";
import "./App.css";
import { addDataToDB, getDataFromDB } from "./firebase/firebase-utils";
// import { tests } from "./data/tests";
import { sendDataInBatch } from "./firebase/firebase-utils";
import Test from './components/Test/Test'
function App() {
	useEffect(() => {
		// sendDataInBatch();
		getDataFromDB("A2", "set1");
	}, []);
	return (
		<div className='App'>
			<Test/>
		</div>
	);
} 

export default App;
