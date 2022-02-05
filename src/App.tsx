import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { DataProvider } from "./context/contextHook";

function App() {
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
