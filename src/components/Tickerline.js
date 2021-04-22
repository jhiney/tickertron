import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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
			allTickers: this.props.allTickers
		};
	}

	getPrice(ticker) {
		//if there is no ticker (by default) then do not fetch
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
	getName(ticker, tickerlist) {
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
	}

	componentDidMount() {
		this.getPrice(this.state.ticker);
		this.getName(this.state.ticker, this.state.allTickers);
	}

	render() {
		const PL = Math.abs(((this.state.stockPrice / this.state.stockPC - 1) * 100).toFixed(2));
		return (
			<div className="tickerline">
				<Card>
					<Row xs={1} md={2} lg={2} xl={5}>
						<Col xl={2}>{this.state.ticker.toUpperCase()}</Col>

						<Col xl={4} style={{ color: "white" }}>
							{this.state.stockName}
						</Col>

						<Col
							xl={2}
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
				</Card>
			</div>
		);
	}
}

/*onClick={() => { console.log("test"}} -> Reserved for future use*/
