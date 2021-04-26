import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Tickerline from "./Tickerline";
import "./style/Ticker.css";
import Loading from "./Loading";
require("dotenv").config();

function Ticker(props) {
	const [allTickers, setallTickers] = useState();
	const [tickersLoaded, settickersLoaded] = useState(false);
	const [todayStart, settodayStart] = useState();
	const [currentTime, setcurrentTime] = useState();

	const getToday = () => {
		var d = new Date();
		d.setDate(d.getDate());
		d.setHours(8, 30, 1, 0);

		var unix = Math.floor(d.getTime() / 1000);

		settodayStart({
			todayStart: unix
		});
	};

	const getCurrentTime = () => {
		var d = new Date();
		var unix = Math.floor(d.getTime() / 1000);

		setcurrentTime({
			currentTime: unix
		});
	};

	useEffect(() => {
		const grabAllTickers = async () => {
			const cs =
				"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=" + process.env.REACT_APP_MY_KEY;
			await fetch(cs)
				.then((res) => res.json())
				.then((result) => {
					setallTickers({ allTickers: result });
					settickersLoaded({ tickersLoaded: true });
				});
			getCurrentTime();
			getToday();
		};

		grabAllTickers();
	}, []);

	const renderHeader = () => {
		return (
			<Row xs={1} md={2} lg={2}>
				<Col xl={2} style={{ color: "gray" }}>
					Ticker
				</Col>
				<Col xl={3} style={{ color: "gray" }}>
					Company
				</Col>
				<Col xl={3} style={{ color: "gray" }}>
					Mark
				</Col>
				<Col xl={2} style={{ color: "gray" }}>
					% G/L
				</Col>
				<Col xl={2} style={{ color: "gray" }}>
					Previous Close
				</Col>
			</Row>
		);
	};

	return (
		<div className="tickerContainer">
			{tickersLoaded ? renderHeader() : <Loading />}
			{props.tickerlist.map((tickers) => {
				return (
					<Tickerline
						tickerToUse={tickers}
						key={tickers}
						allTickers={allTickers.allTickers}
						todayStart={todayStart.todayStart}
						currentTime={currentTime.currentTime}
					/>
				);
			})}
		</div>
	);
}

export default Ticker;
