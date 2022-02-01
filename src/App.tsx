import React from "react";

import "./App.css";


import { DataProvider } from "./firebase/contextHook";
import Test from './components/Test/Test'

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
			<Test/>
			</DataProvider>
		</div>
	);
} 

export default App;
