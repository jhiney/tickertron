import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Loading from "./Loading";
import "./style/Tickerline.css";

export default class SparkChart extends Component {
	static displayName = SparkChart.name;

	constructor(props) {
		super(props);
		this.state = {
			ticker: this.props.tickerToUse,
			todayStart: this.props.todayStart,
			currentTime: this.props.currentTime,
			stockPrices: [],
			associatedTimestamp: [],
			realTimes: [],
			loading: true
		};
	}

	async getData(ticker, today, currentTime) {
		if (ticker) {
			const cs =
				"https://finnhub.io/api/v1/stock/candle?symbol=" +
				ticker.toUpperCase() +
				"&resolution=15&from=" +
				today +
				"&to=" +
				currentTime +
				"&token=" +
				process.env.REACT_APP_MY_KEY;
			await fetch(cs)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						stockPrices: result.c,
						associatedTimestamp: result.t,
						loading: false
					});
				});
		}
	}
	async componentDidMount() {
		await this.getData(this.state.ticker, this.state.todayStart, this.state.currentTime);
	}

	render() {
		const data = {
			labels: this.state.associatedTimestamp,
			datasets: [
				{
					label: "Price",
					data: this.state.stockPrices,
					fill: false,
					backgroundColor: "white",
					borderColor: "white",
					tension: 0.2,
					pointRadius: 0
				}
			]
		};

		const options = {
			responsive: false,
			plugins: {
				legend: {
					display: false
				},
				tooltip: {
					enabled: false
				}
			},

			scales: {
				yAxis: {
					display: false
				},
				xAxis: {
					display: false
				}
			}
		};
		return (
			<div>
				{this.state.loading ? (
					<Loading />
				) : (
					<Line data={data} options={options} width={125} height={40} />
				)}
			</div>
		);
	}
}
