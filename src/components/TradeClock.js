import React from "react";
import "./style/CommandBar.css";

function TradeClock() {
	const getTime = () => {
		var d = new Date();

		var utc = d.getTime() + d.getTimezoneOffset() * 60000;

		var nd = new Date(utc + 3600000 * -4);

		var time = nd.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		return time;
	};

	const marketOpen = () => {
		var d = new Date();

		var utc = d.getTime() + d.getTimezoneOffset() * 60000;

		var nd = new Date(utc + 3600000 * -4);

		if (nd.getHours() >= 16 || nd.getHours() <= 6 ) {
			return false;
		}
		else if (nd.getHours() > 8) {
			return true;
		}
		else if (nd.getHours() > 7 && nd.getMinutes() >= 30) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="clock" style={marketOpen() ? { color: "forestgreen" } : { color: "darkred" }}>
			NYSE: {getTime()}
		</div>
	);
}

export default TradeClock;
