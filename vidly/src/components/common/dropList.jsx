import React, { Component } from "react";

class DropList extends Component {
  state = {
    selectedValue: ""
  };
  componentDidMount = () => {
    const { value } = this.props;
    this.setState({ selectedValue: value });
  };

  render() {
    const { items, name, label, value, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          onChange={onChange}
          value={value}
          className="form-control"
          id={name}
          name={name}
        >
          <option />
          {items.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropList;
