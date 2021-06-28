import "./App.css";
import React, { useState } from "react";
import Ticker from "./components/Ticker";
import CommandBar from "./components/CommandBar";
import FooterBar from "./components/FooterBar";
import FileDialogue from "./components/FileDialogue";

function App() {
	//const [ticker, setTicker] = useState('');
	const [listOfTicker, setlistOfTicker] = useState([]);
	const [file, setFile] = useState();

	const handleCallback = (commandBarData) => {
		//take the commandBarData and append it to the listOfTicker
		setlistOfTicker([...listOfTicker, commandBarData.ticker]);
	};

	const handleFileCallback = (fileData) => {
		setFile(fileData)
	}	

	return (
		<div>
			<CommandBar tickerCallback={handleCallback} />
			<Ticker
				//key={tickerlist} ---- uncomment this if you want every line to reload on submit, otherwise it'll just load a new ticker below the current one
				tickerlist={listOfTicker}
			/>
			<FileDialogue fileCallback={handleFileCallback} />
			{file}
			<FooterBar />
		</div>
	);
}

export default App;
