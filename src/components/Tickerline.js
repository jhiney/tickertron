import React from "react";
import { Col, Row } from "react-bootstrap";
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
            stockPC: result.pc,
          });
        });
    }
  }
  getName(ticker) {
    //if there is no ticker (by default) then do not fetch
    if (ticker) {
      const cs =
        "https://finnhub.io/api/v1/stock/profile2?symbol=" +
        ticker.toUpperCase() +
        "&token=" +
        process.env.REACT_APP_MY_KEY;
      fetch(cs)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            stockName: result.name,
          });
        });
    }
  }

  componentDidMount() {
    this.getPrice(this.state.ticker);
    this.getName(this.state.ticker);
  }

  render() {
    const PL = Math.abs((((this.state.stockPrice / this.state.stockPC) - 1) * 100).toFixed(2));
    return (
      <div className="tickerline">
        <Row xs={1} md={2} lg={5}>
          <Col>{this.state.ticker.toUpperCase()}</Col>
          <Col /*onClick={() => { console.log("test"}} -> Reserved for future use*/ style={{ color: "white" }}>{this.state.stockName}</Col>
          <Col
            style={
              this.state.stockPC < this.state.stockPrice
                ? { color: "forestgreen" }
                : { color: "darkred" }
            }
          >
            ${this.state.stockPrice}
          </Col>
          <Col  style={
              this.state.stockPC < this.state.stockPrice
                ? { color: "forestgreen" }
                : { color: "darkred" }
            }>{PL}%</Col>
          <Col style={{ color: "white" }}>${this.state.stockPC}</Col>
        </Row>
      </div>
    );
  }
}
