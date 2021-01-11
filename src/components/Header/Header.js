import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <div style={HeaderStyle}>
        <h1>ToDoList</h1>
        <Link to="/" style={linkStyle}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="/About" style={linkStyle}>
          About
        </Link>
      </div>
    );
  }
}

const HeaderStyle = {
  background: "gray",
  textAlign: "center",
  padding: "10px",
  fontFamily: "serif",
  color: "white",
};

const linkStyle = {
  color: "white",
};

export default Header;
