import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      background: "#d9f2e6",
      borderBottom: "2px solid gray",
    };
  };

  render() {
    const { id } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onClick={this.props.markComplete.bind(this, id)}
            checked={this.props.todo.completed ? "checked" : ""}
          />{" "}
          {this.props.todo.title}
          <input
            type="button"
            style={btnStyle}
            value="X"
            onClick={this.props.delItem.bind(this, id)}
          />
        </p>
      </div>
    );
  }
}

const btnStyle = {
  float: "right",
  width: "1.3rem",
  borderRadius: "50%",
  background: "red",
  fontSize: "1.1rem",
  border: "none",
  cursor: "pointer",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;

/*
onClick = {this.props.eventHandler.bind(this, id)}

or do something like this:

onClick = () => {
  this.props.eventHandler(id)
}
*/
