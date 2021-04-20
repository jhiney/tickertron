import React from "react";
import { Col, Row } from "react-bootstrap";
import Tickerline from "./Tickerline";
import "./style/Ticker.css";
require("dotenv").config();

export default class Ticker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTickers: {},
			tickersLoaded: false
		};
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
	}

	async componentDidMount() {
		await this.grabAllTickers();
	}

	render() {
		return (
			<div className="tickerContainer">
				{this.state.tickersLoaded ? this.renderHeader() : ""}
				{this.props.listofTickers.map((tickers) => {
					return (
						<Tickerline tickerToUse={tickers} key={tickers} allTickers={this.state.allTickers} />
					);
				})}
			</div>
		);
	}
}
