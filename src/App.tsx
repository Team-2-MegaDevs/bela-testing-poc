import React, { useEffect } from "react";
//@ts-ignore
import logo from "./logo.svg";
import "./App.css";
import { addDataToDB, getDataFromDB } from "./firebase/firebase-utils";
// import { tests } from "./data/tests";
import { sendDataInBatch } from "./firebase/firebase-utils";

function App() {
	useEffect(() => {
		// sendDataInBatch();
		getDataFromDB("A2", "set1");
	}, []);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
