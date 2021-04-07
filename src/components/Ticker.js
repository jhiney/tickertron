import React from "react";
import Tickerline from "./Tickerline";
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
      <div>
        {this.props.listofTickers.map((tickers) => {
          return <Tickerline tickerToUse={tickers} key={tickers} />;
        })}
      </div>
    );
  }
}
