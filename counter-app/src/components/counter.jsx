import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  decBtn = value => {
    if (value > 0) {
      return (
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
      );
    } else {
      return (
        <button className="btn btn-secondary btn-sm" disabled>
          -
        </button>
      );
    }
  };

  render() {
    // console.log("props", this.props);
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        {/* <div className="container"> */}
        <div className="row justify-content-start">
          <div className="col-1">
            <span className={this.getBadgeName()}>{this.formatCount()}</span>
          </div>
          <div className="col-4">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btm-sm"
            >
              +
            </button>
            {this.decBtn(this.props.counter.value)}
            <button
              onClick={() => {
                return this.props.onDelete(this.props.counter.id);
              }}
              className="btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeName() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>Zero</h5> : value;
  }
}

export default Counter;
