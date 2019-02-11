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
    const { options, name, label, error, ...rest } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select id={name} name={name} {...rest} className="form-control">
          <option value="" />
          {options.map(option => (
            <option value={option._id} key={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default DropList;
