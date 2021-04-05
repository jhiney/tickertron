import React from "react";
require('dotenv').config()
//const axios = require('axios')

export default class Tickerline extends React.Component {
    static displayName = Tickerline.name;
    
    constructor(props) {
        super(props)
        this.state = {
          ticker:''
        }
    }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}