import React, { Component } from 'react';
import Input from './../elements/formelements/input/Input';

import Button from './../elements/formelements/button/Button';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      groupname: ''
    };
  }
  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });
  render() {
    return (
      <div>
        <Input
          label="Email"
          type="email"
          id="email"
          element="input"
          additionaltextid="notifythatyouwillneed"
          additionaltext="Plese provide valid email, you will need to access your account"
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
        <Input
          label="Password Confirm"
          type="password"
          id="passwordConfirm"
          element="input"
          name="passwordConfirm"
          value={this.state.passwordConfirm}
          onChange={this.HandleInputChange}
        />
        <Input
          label="Provide your group name"
          type="email"
          id="groupname"
          element="input"
          additionaltextid="groupnamefromagency"
          additionaltext="You can get your groupname from your agency"
          name="groupname"
          value={this.state.groupname}
          onChange={this.HandleInputChange}
        />

        <Button classes=" mx-3 btn-success">Sign up</Button>
      </div>
    );
  }
}

export default SignUp;
