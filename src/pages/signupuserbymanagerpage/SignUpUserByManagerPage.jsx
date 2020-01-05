import React, { Component } from 'react';

export class SignUpUserByManagerPage extends Component {
  render() {
    return (
      <div>
        <form className="container">
          <div className="form-group ">
            <label for="exampleFormControlTextarea1">Name and Surnames</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group ">
            <label for="exampleFormControlTextarea1">Emails</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group ">
            <label for="exampleFormControlTextarea1">Worker code</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn mx-3 btn-primary">
            Check and give list of users
          </button>
          {/* <button type="submit" className="btn mx-3 btn-success">
            Sign Up all users
          </button> */}
        </form>
      </div>
    );
  }
}

export default SignUpUserByManagerPage;
