import React from "react";
import {
    Navbar,
    Form,
    FormControl,
    InputGroup
} from 'react-bootstrap'

export default class CommandBar extends React.Component {  
  render() {
    return (
      <div>
        <Navbar className="bg-dark justify-content-between">
            <Form inline>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="ticker" aria-label="ticker"/>
                </InputGroup>
            </Form>
        </Navbar>
      </div>
    );
  }
}