import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
	getAllSets,
	getDataFromDB,
	sendDataInBatch,
} from "./firebase/firebase-utils";
import { DataProvider } from "./firebase/contextHook";

function App() {
	// useEffect(() => {
	// 	// sendDataInBatch();
	// 	// getting an specific set from DB.
	// 	// getDataFromDB("A2", "set1", "reading");
	// 	getAllSets("grammar", "A2").then(data => console.log(data));
	// }, []);
  
	return (
		<div className='App'>
			<DataProvider>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header>
			</DataProvider>
		</div>
	);
}

export default App;
