import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Loading from "./Loading";
import "./style/Tickerline.css";

export default class StockChart extends Component {
	static displayName = StockChart.name;

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
						associatedTimestamp: result.t
					});
				});
		}
	}

	async getRealTime(timestamps) {
		try {
			for (var i = 0; i < timestamps.length; i++) {
				var date = new Date(timestamps[i] * 1000);
				var dateObject = new Date(date);
				var humanDateFormat = dateObject.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				});
				this.state.realTimes.push(humanDateFormat);
			}

			this.setState({
				loading: false
			});
		} catch (error) {}
	}

	async componentDidMount() {
		await this.getData(this.state.ticker, this.state.todayStart, this.state.currentTime);
		await this.getRealTime(this.state.associatedTimestamp);
	}

	render() {
		const data = {
			labels: this.state.realTimes,
			datasets: [
				{
					label: "Price",
					data: this.state.stockPrices,
					fill: false,
					backgroundColor: "rgb(34, 139, 34)",
					borderColor: "rgb(34, 139, 34)",
					tension: 0.1
				}
			]
		};

		const options = {
			plugins: {
				legend: {
					display: false
				}
			},
			scales: {
				yAxis: {
					beginAtZero: false,

					grid: {
						color: "transparent",
						lineWidth: 1
					},
					ticks: {
						color: "rgb(190, 190, 190)",
						callback: function (value) {
							return "$" + value;
						}
					}
				},
				xAxis: {
					beginAtZero: false,

					grid: {
						color: "transparent",
						lineWidth: 1
					},
					ticks: {
						color: "rgb(190, 190, 190)"
					}
				}
			}
		};
		return (
			<div>
				{this.state.loading ? (
					<Loading />
				) : (
					<Line data={data} options={options} width={600} height={100} />
				)}
				<hr />
			</div>
		);
	}
}
