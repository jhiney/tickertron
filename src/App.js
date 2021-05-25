import "./App.css";
import React, { useState } from "react";
import Ticker from "./components/Ticker";
import CommandBar from "./components/CommandBar";
import FooterBar from "./components/FooterBar";

function App() {
	//const [ticker, setTicker] = useState('');
	const [listOfTicker, setlistOfTicker] = useState([]);

	const handleCallback = (commandBarData) => {
		//take the commandBarData and append it to the listOfTicker
		setlistOfTicker([...listOfTicker, commandBarData.ticker]);
	};

	return (
		<div>
			<CommandBar tickerCallback={handleCallback} />
			<Ticker
				//key={tickerlist} ---- uncomment this if you want every line to reload on submit, otherwise it'll just load a new ticker below the current one
				tickerlist={listOfTicker}
			/>
			<FooterBar />
		</div>
	);
}

export default App;
