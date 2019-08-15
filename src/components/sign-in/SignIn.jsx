import React from "react";

import FormInput from "../form-input/FormInput";

import "./SignIn.styles.scss";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
