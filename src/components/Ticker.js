import React from "react";
require('dotenv').config()

export default class Ticker extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.dataParentToChild
  }
}
  render() {
    const {data} = this.state;
    return (
      
      <div>
        {data}
      </div>
    );
  }
}