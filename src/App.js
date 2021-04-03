import './App.css';
import React from "react";
import { Link } from "react-router-dom";

 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Home page</p>
        <Link to="/profile">Go back to profile</Link>
        <div>
        </div>
      </div>
    );
  }
}
