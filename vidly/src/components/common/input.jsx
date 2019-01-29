import React from "react";
const Input = ({ name, label, value, onChange, autoFocus }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
