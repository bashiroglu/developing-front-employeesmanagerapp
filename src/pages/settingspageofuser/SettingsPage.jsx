import React, { Component } from 'react';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

export class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      groupname: '',
      shoeSize: '',
      bodySize: '',
      password: '',
      newpassword: '',
      newPasswordConfirm: ''
    };
  }
  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-md-6 mt-4">
            <h2>Fill in your details</h2>
            <p>
              This data will be used to provide you neccessary items to work
            </p>
            <Input
              label="Email"
              type="email"
              name="email"
              id="email"
              element="input"
              additionaltextid="notifythatyouwillneed"
              additionaltext="Please provide valid email for security purposes"
              onChange={this.HandleInputChange}
            />
            <Input label="Name" type="text" id="name" element="input" />
            <Input
              label="Provide your group name"
              type="email"
              id="groupname"
              name="groupname"
              element="input"
              additionaltextid="groupnamefromagency"
              additionaltext="You can get your groupname from your agency"
              onChange={this.HandleInputChange}
            />
            <Input
              label="Provide your shoe size"
              type="text"
              id="shoeSize"
              name="shoeSize"
              element="input"
              additionaltextid="shoetext"
              additionaltext="We need this information to provide you with shoes"
              onChange={this.HandleInputChange}
            />
            <Input
              label="Provide your body size"
              type="body"
              name="bodySize"
              id="body"
              element="input"
              additionaltextid="bodytext"
              additionaltext="We need this information to provide you with T-shirt"
              onChange={this.HandleInputChange}
            />
            <Button classes="mx-3 btn-success">Update</Button>
            {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
          </form>
          <form className="col-md-6 mt-4">
            <h2>You can update your password</h2>
            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              element="input"
              onChange={this.HandleInputChange}
            />
            <Input
              label="New Password"
              type="password"
              id="newpassword"
              name="newpassword"
              element="input"
              onChange={this.HandleInputChange}
            />
            <Input
              label="New Password Confirm"
              type="password"
              id="newPasswordConfirm"
              name="newPasswordConfirm"
              element="input"
              onChange={this.HandleInputChange}
            />

            <Button classes=" mx-3 btn-success">Update Password</Button>
            {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default SettingsPage;
