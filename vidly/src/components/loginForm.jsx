import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };
  //   username = React.createRef();

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  //set the schema for Joi error validation

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // errors needs to be set, cannot be null
    if (errors) return;

    // Call the server
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, option);
    //Joi.validate(object to validate, schema);
    if (!error) return null;
    //there is no error
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    //if the error is removed, the message should be cleared

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              name="username"
              value={account.username}
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div> */}

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
