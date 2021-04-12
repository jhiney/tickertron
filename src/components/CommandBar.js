import React from "react";
import {
    Navbar,
    Form,
    FormControl
} from 'react-bootstrap'
import './style/CommandBar.css'

export default class CommandBar extends React.Component {  

  constructor(props) {
    super(props)
    this.state = {
        ticker: ''
    }
    //binds the change and submit handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({ ticker: event.target.value });
}

handleSubmit(event) {
  this.props.tickerCallback(this.state.ticker);
  event.preventDefault();
  event.target.reset();         
}
  render() {
    return (
      <div>
        <Navbar>
            <Form inline onSubmit={this.handleSubmit} id="tickerForm"> 
                <FormControl autoComplete="off" placeholder="/tickertron" aria-label="ticker" id="ticker-bar" value={this.state.value} onChange={this.handleChange} /> 
            </Form>
        </Navbar>
      </div>
    );
  }
}

document.addEventListener("keypress", function onPress(event) {
  if (event.key === "/") {
    const input = document.getElementById('ticker-bar');
    input.select();
    event.preventDefault();
  }
  
});
