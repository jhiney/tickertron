import React from "react";
import Tickerline from "./Tickerline";
import './style/Ticker.css'
require("dotenv").config();

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: this.props.dataParentToChild,
    };
  }

  render() {
    return (
      <div className="tickerContainer">
        {this.props.listofTickers.map((tickers) => {
          return <Tickerline tickerToUse={tickers} key={tickers} />;
        })}
      </div>
    );
  }
}
