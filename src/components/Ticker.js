import React from "react";
import { Col, Row } from "react-bootstrap";
import Tickerline from "./Tickerline";
import "./style/Ticker.css";
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
        <Row xs={4} md={4} lg={4}>
          <Col style={{ color: "gray" }}>Ticker</Col>
          <Col style={{ color: "gray" }}>Company</Col>
          <Col style={{ color: "gray" }}>Previous Close</Col>
          <Col style={{ color: "gray" }}>Mark</Col>
        </Row>
        {this.props.listofTickers.map((tickers) => {
          return <Tickerline tickerToUse={tickers} key={tickers} />;
        })}
      </div>
    );
  }
}
