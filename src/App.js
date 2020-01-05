import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import AllUsersPage from './pages/allemployeespage/AllEmployeesPage';
import EmployeesShiftPage from './pages/employeesshiftpage//EmployeesShiftPage';
import SignUpUserByManagerPage from './pages/signupuserbymanagerpage/SignUpUserByManagerPage';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact path="/employees-list" component={AllUsersPage} />
            <Route
              exact
              path="/employees-shifts"
              component={EmployeesShiftPage}
            />
            <Route
              exact
              path="/sign-up-user-by-manager"
              component={SignUpUserByManagerPage}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
