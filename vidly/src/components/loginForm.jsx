import React, { Component } from "react";
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

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // errors needs to be set, cannot be null
    if (errors) return;

    // Call the server
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required.";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required.";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
