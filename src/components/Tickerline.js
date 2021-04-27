import React from "react";
import { Card, Col, Row, Accordion } from "react-bootstrap";
import StockChart from "./StockChart";
import "./style/Tickerline.css";
require("dotenv").config();

export default class Tickerline extends React.Component {
	static displayName = Tickerline.name;

	constructor(props) {
		super(props);
		this.state = {
			ticker: this.props.tickerToUse,
			stockPrice: "",
			stockName: "",
			stockPC: "",
			allTickers: this.props.allTickers,
			todayStart: this.props.todayStart,
			currentTime: this.props.currentTime
		};
	}

	async getPrice(ticker) {
		//if there is no ticker (which is the default) then do not fetch
		if (ticker) {
			const cs =
				"https://finnhub.io/api/v1/quote?symbol=" +
				ticker.toUpperCase() +
				"&token=" +
				process.env.REACT_APP_MY_KEY;
			fetch(cs)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						stockPrice: result.c,
						stockPC: result.pc
					});
				});
		}
	}
	async getName(ticker, tickerlist) {
		/*I chose to use a for loop rather than forEach because it is simple incrementing and matching
		and a forEach would be much more overhead and slow down the search. After all, this change was made
		because finding the company name was taking too long */
		for (var i = 0; i < tickerlist.length; i++) {
			if (tickerlist[i].displaySymbol === ticker.toUpperCase()) {
				this.setState({
					stockName: tickerlist[i].description
				});
			}
		}
		//if nothing comes up in the ticker search - say it isn't real
		if (this.state.stockName === "") {
			this.setState({
				stockName: "Not Real"
			});
		}
	}

	async componentDidMount() {
		await this.getPrice(this.state.ticker);
		await this.getName(this.state.ticker, this.state.allTickers);
	}

	render() {
		const PL = Math.abs(((this.state.stockPrice / this.state.stockPC - 1) * 100).toFixed(2));
		return (
			<div className="tickerline">
				<Accordion>
					<Card>
						<Accordion.Toggle as={Card.Body} eventKey="1">
							<Row xs={1} md={2} lg={2}>
								<Col xl={1}>{this.state.ticker.toUpperCase()}</Col>

								<Col xl={4} style={{ color: "white" }}>
									{this.state.stockName}
								</Col>

								<Col
									xl={3}
									style={
										this.state.stockPC < this.state.stockPrice
											? { color: "forestgreen" }
											: { color: "darkred" }
									}>
									${this.state.stockPrice}
								</Col>

								<Col
									xl={2}
									style={
										this.state.stockPC < this.state.stockPrice
											? { color: "forestgreen" }
											: { color: "darkred" }
									}>
									{PL}%
								</Col>

								<Col xl={2} style={{ color: "white" }}>
									${this.state.stockPC}
								</Col>
							</Row>
							<hr />
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<StockChart
								tickerToUse={this.state.ticker}
								todayStart={this.state.todayStart}
								currentTime={this.state.currentTime}
							/>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		);
	}
}
