import React from "react";
import { Col, Row} from "react-bootstrap";
import Tickerline from "./Tickerline";
import "./style/Ticker.css";
import Loading from "./Loading";
require("dotenv").config();

export default class Ticker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTickers: {},
			tickersLoaded: false,
			todayStart: "",
			currentTime: ""
		};
	}

	getToday() {
		var d = new Date();
		d.setDate(d.getDate());
		d.setHours(8, 30, 1, 0);

		var unix = Math.floor(d.getTime() / 1000);

		this.setState({
			todayStart: unix
		});
	}

	getCurrentTime() {
		var d = new Date();
		var unix = Math.floor(d.getTime() / 1000);

		this.setState({
			currentTime: unix
		});
	}

	renderHeader() {
		return (
			<Row xs={1} md={2} lg={2}>
				<Col xl={2} style={{ color: "gray" }}>
					Ticker
				</Col>
				<Col xl={4} style={{ color: "gray" }}>
					Company
				</Col>
				<Col xl={2} style={{ color: "gray" }}>
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
	}

	async grabAllTickers() {
		const cs =
			"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=" + process.env.REACT_APP_MY_KEY;
		await fetch(cs)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					allTickers: result,
					//sets tickersLoaded to true when the inital fetch has completed
					tickersLoaded: true
				});
			});
			this.getCurrentTime();
			this.getToday();
			
	}

	async componentDidMount() {
		await this.grabAllTickers();
		console.log(this.state)
	}

	render() {
		return (
			<div className="tickerContainer">
				{this.state.tickersLoaded ? this.renderHeader() : <Loading />}
				{this.props.listofTickers.map((tickers) => {
					return (
						<Tickerline
							tickerToUse={tickers}
							key={tickers}
							allTickers={this.state.allTickers}
							todayStart={this.state.todayStart}
							currentTime={this.state.currentTime}
						/>
					);
				})}
			</div>
		);
	}
}
