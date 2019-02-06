import React from "react";
const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
