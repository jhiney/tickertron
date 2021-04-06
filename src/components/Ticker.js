import React from "react";
import Tickerline from "./Tickerline";
require('dotenv').config()

export default class Ticker extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.dataParentToChild
  }
}
  render() {
    return ( 
      <div>
        <Tickerline tickerToUse = {this.state.data} key={this.state.data}/>
      </div>
    );
  }
}


//EVENTUALLY - This component will be used to house the list of tickers
//that will be sent and create many different tickerline components - boom