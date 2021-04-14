import "./App.css";
import React from "react";
import Ticker from "./components/Ticker";
import CommandBar from "./components/CommandBar";
import FooterBar from "./components/FooterBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: null,
      listofTicker: [],
    };
  }
  
  handleCallback = (commandBarData) => {
    this.setState({ ticker: commandBarData });
    this.state.listofTicker.push(commandBarData);
  };

  render() {
    const tickerlist = this.state.listofTicker;
    return (
      <div>
        <CommandBar tickerCallback={this.handleCallback} />
        <Ticker
          //key={tickerlist} ---- uncomment this if you want every line to reload on submit, otherwise it'll just load a new ticker below the current one
          listofTickers={tickerlist}
        />
        <FooterBar />
      </div>
    );
  }
}
