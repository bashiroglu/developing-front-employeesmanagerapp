import React, { Component } from 'react';

import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';

export class Login extends Component {
  render() {
    return (
      <form>
        <Input label="Email" type="email" id="email" element="input" />
        <Input label="Password" type="password" id="password" element="input" />
        <Button classes=" mx-3 btn-primary">Log in</Button>
      </form>
    );
  }
}

export default Login;
