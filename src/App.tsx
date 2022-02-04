import React from "react";

import "./App.css";


import { DataProvider } from "./firebase/contextHook";
import Test from './components/Test/Test'

function App() {
	return (
		<div className='App'>
			<DataProvider>
			<Test/>
			</DataProvider>
		</div>
	);
} 

export default App;
