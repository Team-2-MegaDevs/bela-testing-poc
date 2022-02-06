
import React, { useState } from "react";
import "./App.css";
import Test from "./components/Test";

import { DataProvider } from "./context/contextHook";

function App() {
	const [showQuestion, setShowQuestion] = useState(false);
	return (
		<div className='App'>
			<DataProvider>
				<button onClick={() => setShowQuestion(!showQuestion)}>
					Show Question
				</button>
				{!showQuestion ? (
					<div>
						<h2>Welcome to Bela Testing</h2>
					</div>
				) : (
					<Test />
				)}
			</DataProvider>
		</div>
	);
} 

export default App;
