import React from "react";
const Input = ({ name, label, value, onChange, error, autoFocus }) => {
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
