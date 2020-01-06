import React, { Component } from 'react';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

export class SettingsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-md-6 mt-4">
            <Input
              label="Email"
              type="email"
              id="email"
              element="input"
              additionaltextid="notifythatyouwillneed"
              additionaltext="Please provide valid email for security purposes"
            />
            <Input label="Name" type="text" id="name" element="input" />
            <Input
              label="Provide your group name"
              type="email"
              id="groupname"
              element="input"
              additionaltextid="groupnamefromagency"
              additionaltext="You can get your groupname from your agency"
            />
            <Input
              label="Provide your shoe size"
              type="shoe"
              id="shoe"
              element="input"
              additionaltextid="shoetext"
              additionaltext="We need this information to provide you with shoes"
            />
            <Input
              label="Provide your body size"
              type="body"
              id="body"
              element="input"
              additionaltextid="bodytext"
              additionaltext="We need this information to provide you with T-shirt"
            />
            <Button classes="mx-3 btn-success">Update</Button>
            {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
          </form>
          <form className="col-md-6 mt-4">
            <Input
              label="Password"
              type="password"
              id="password"
              element="input"
            />
            <Input
              label="Password Confirm"
              type="password"
              id="passwordConfirm"
              element="input"
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
