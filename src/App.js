import './App.css';
import React from "react";
import Ticker from './components/Ticker';
import CommandBar from './components/CommandBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <CommandBar />
      <Ticker />
      </div>
    );
  }
}
