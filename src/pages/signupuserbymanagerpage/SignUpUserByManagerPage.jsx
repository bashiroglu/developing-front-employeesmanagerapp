import React, { Component } from 'react';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

export class SignUpUserByManagerPage extends Component {
  render() {
    return (
      <div>
        <form className="container mt-4">
          <Input id="namesurnametextarea" label="Name and Surnames" />
          <Input id="emails" label="Emails" />
          <Button classes=" mx-3 btn-primary">
            Check and give list of users
          </Button>
          {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
        </form>
      </div>
    );
  }
}

export default SignUpUserByManagerPage;
