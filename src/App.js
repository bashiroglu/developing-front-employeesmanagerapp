import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from './components/header/Header';
// import AllUsersPage from './pages/alluserspage/AllUsersPage';

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
            {/* <Route exact path="/" component={AllUsersPage} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
