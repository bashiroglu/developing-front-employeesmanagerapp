import React, { Component } from 'react';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

export class SignUpUserByManagerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: '',
      fullName: ''
    };
  }
  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    const { fullName, emails } = this.state;
    return (
      <div>
        <form className="container mt-4">
          <Input
            onChange={this.HandleInputChange}
            id="fullName"
            label="Name and Surnames"
            name="fullName"
            value={fullName}
          />
          <Input
            onChange={this.HandleInputChange}
            name="emails"
            id="emails"
            label="Emails"
            value={emails}
          />
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
