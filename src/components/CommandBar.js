import React from "react";
import {
    Navbar,
    Form,
    FormControl,
    InputGroup
} from 'react-bootstrap'
import './style/CommandBar.css'

export default class CommandBar extends React.Component {  
  render() {
    return (
      <div>
        <Navbar className="justify-content-center" >
            <Form inline>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="ticker" aria-label="ticker" id="ticker-add"/>
                </InputGroup>
            </Form>
        </Navbar>
      </div>
    );
  }
}

document.addEventListener("keypress", function onPress(event) {
  if (event.key === "/") {
    const input = document.getElementById('ticker-add');
    input.select();
    event.preventDefault();
  }
});
