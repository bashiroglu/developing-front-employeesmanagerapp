import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { AuthProvider } from './utils/context/authContext';

import Header from './components/header/Header';
import AllUsersPage from './pages/allemployeespage/AllEmployeesPage';
import EmployeesShiftPage from './pages/employeesshiftpage//EmployeesShiftPage';
import SignUpUserByManagerPage from './pages/signupuserbymanagerpage/SignUpUserByManagerPage';
import BookShiftPage from './pages/bookshiftpage/BookShiftPage';
import LoginPage from './pages/loginpage/LoginPage';
import SignUpPage from './pages/signuppage/SignUpPage';
import NewlyAddedEmployeesPage from './pages/newaddedemployeespage/NewlyAddedEmployeesPage';
import SettingsPage from './pages/settingspageofuser/SettingsPage';
import ManagerListPage from './pages/managerslistpage/ManagerListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './utils/context/authContext';

function App() {
  const { userObject } = useContext(AuthContext);
  console.log(userObject);

  let routes;
  if (userObject.token) {
    routes = (
      <React.Fragment>
        

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

          <Route
            exact
            path="/employee-confirm"
            component={NewlyAddedEmployeesPage}
          />
          <Route exact path="/managers-list-page" component={ManagerListPage} />
          <Route exact path="/bookshift" component={BookShiftPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Redirect to="/sign-in" />
        </Switch>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/sign-in" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </React.Fragment>
    );
  }
  return (
    <main>
      <Header />
      {routes}
    </main>
  );
}

export default App;
