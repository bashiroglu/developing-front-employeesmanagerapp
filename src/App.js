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
          <Route exact path="/employees-list">
            <AllUsersPage />
          </Route>
          <Route exact path="/employees-shifts">
            <EmployeesShiftPage />
          </Route>
          <Route exact path="/sign-up-user-by-manager">
            <SignUpUserByManagerPage />
          </Route>
          <Route exact path="/employee-confirm">
            <NewlyAddedEmployeesPage />
          </Route>
          <Route exact path="/managers-list-page">
            <ManagerListPage />
          </Route>
          <Route exact path="/bookshift">
            <BookShiftPage />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Redirect to="/bookshift" />
        </Switch>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/sign-in">
            <LoginPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
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
