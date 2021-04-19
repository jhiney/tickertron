import React from "react";
import { Col, Row } from "react-bootstrap";
import Tickerline from "./Tickerline";
import "./style/Ticker.css";
require("dotenv").config();

export default class Ticker extends React.Component {
  renderHeader()
  {
    return(
      <Row xs={1} md={2} lg={5}>
          <Col style={{ color: "gray" }}>Ticker</Col>
          <Col style={{ color: "gray" }}>Company</Col>
          <Col style={{ color: "gray" }}>Mark</Col>
          <Col style={{ color: "gray" }}>% G/L</Col>
          <Col style={{ color: "gray" }}>Previous Close</Col>
        </Row>
    )
  }
  
  render() {
    return (
      <div className="tickerContainer">
        {this.renderHeader()}
        {this.props.listofTickers.map((tickers) => {
          return <Tickerline tickerToUse={tickers} key={tickers} />;
        })}
      </div>
    );
  }
}
