
import React, { useState } from "react";
import "./App.css";
import Test from "./components/Test/Test";

import { DataProvider } from "./context/contextHook";

function App() {
	const [showQuestion, setShowQuestion] = useState(false);
	return (
		
			<DataProvider>
				<div className='App'>
				<button onClick={() => setShowQuestion(!showQuestion)}>
					Show Question
				</button>
				{!showQuestion ? (
					<div>
						<h2>Welcome to Bela Testing</h2>
					</div>
				) : (

					<div style={{ display: 'flex', justifyContent:'center' }}>
            			<div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px', maxWidth:'800px', width:'90%' }}>
                			<Test/>
            			</div>
        			</div>
				)}
				</div>
			</DataProvider>
		
	);
} 

export default App;
