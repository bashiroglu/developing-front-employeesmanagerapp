import React, { Component } from 'react';
import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';
export class LoginAndSignUpPage extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Login />
          </div>
          <div className="col-6">
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAndSignUpPage;
