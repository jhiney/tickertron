import './App.css';
import React from 'react';
import Ticker from './components/Ticker';
import CommandBar from './components/CommandBar';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        ticker: null
    }
}

handleCallback = (commandBarData) =>{
    this.setState({ticker: commandBarData})

}
  render() {
    const tickerFound = this.state.ticker;
    return (
      <div>
      <CommandBar tickerCallback = {this.handleCallback}/>
      <Ticker dataParentToChild  = {tickerFound} key={tickerFound}/>
      </div>
    );
  } 
}
