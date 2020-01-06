import React, { Component } from 'react';

import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });
  render() {
    return (
      <form>
        <h2>I have already account</h2>
        <Input
          label="Email"
          type="email"
          id="email"
          element="input"
          name="email"
          value={this.state.email}
          onChange={this.HandleInputChange}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          element="input"
          name="password"
          value={this.state.password}
          onChange={this.HandleInputChange}
        />
        <Button classes=" mx-3 btn-primary">Log in</Button>
      </form>
    );
  }
}

export default Login;
