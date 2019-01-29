import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };
  username = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    console.log("Form submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
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
