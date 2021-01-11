import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="task"
          onChange={this.onChange}
          value={this.state.text}
          style={{ flex: "8", padding: "10px" }}
        />
        <input type="submit" value="Add" style={btn} />
      </form>
    );
  }
}

const btn = {
  flex: "1",
  background: "black",
  color: "white",
  fontSize: "1.2rem",
};

export default AddToDo;
