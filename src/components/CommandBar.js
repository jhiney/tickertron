import { React, useState } from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "./style/CommandBar.css";

function CommandBar(props) {
	const [ticker, setTicker] = useState("");

	const handleChange = (event) => {
		setTicker({ ticker: event.target.value });
	};

	const handleSubmit = (event) => {
    //as opposed to the class, the tickerCallback passes a ticker object instead of the string value.
    //We handle this in App.js by grabbing only what we need.
		props.tickerCallback(ticker);
		event.preventDefault();
		event.target.reset();
		//reset the state
		setTicker({ ticker: "" });
	};

	return (
		<div className="commandBar">
			<Navbar>
				<Form inline onSubmit={handleSubmit} id="tickerForm">
					<FormControl
						autoComplete="off"
						placeholder="/tickertron"
						aria-label="ticker"
						id="ticker-bar"
						value={ticker.ticker}
						onChange={handleChange}
					/>
				</Form>
			</Navbar>
		</div>
	);
}
document.addEventListener("keypress", function onPress(event) {
	if (event.key === "/") {
		const input = document.getElementById("ticker-bar");
		input.select();
		event.preventDefault();
	}
});

export default CommandBar;
