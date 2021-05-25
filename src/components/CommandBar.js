import React, { useState } from "react";
import { Navbar, Form, FormControl, NavItem } from "react-bootstrap";
import "./style/CommandBar.css";
import TradeClock from "./TradeClock";

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
			<Navbar className="container-fluid">
				<Form inline onSubmit={handleSubmit} id="tickerForm">
					<FormControl
						autoComplete="off"
						autoCorrect="off"
						spellCheck="false"
						placeholder="/tickertron"
						aria-label="ticker"
						id="ticker-bar"
						value={ticker.value}
						onChange={handleChange}
					/>
				</Form>
				<NavItem className="ml-auto">
					<TradeClock />
				</NavItem>
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
