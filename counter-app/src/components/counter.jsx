import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  render() {
    // console.log("props", this.props);
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeName()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            return this.props.onDelete(this.props.counter.id);
          }}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeName() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
