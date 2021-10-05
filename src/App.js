import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login'
import FavWatch from './components/FavWatch';

export class App extends Component {
  render() {
    const {isAuthenticated} = this.props.auth0;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">{isAuthenticated? <Home/>:<Login/>}</Route>
            <Route exact path="/Profile">{isAuthenticated? <Profile/>:<Login/>}</Route>
            <Route exact path="/FavWatch">{isAuthenticated? <FavWatch/>:<Login/>}</Route>

          </Switch>
        </Router>
        {/* @todo show login button and hide the list for unauthenticated users */}
        {/* @todo show logout button and show items list components for authenticated users */}
      </div>
    )
  }
}

export default withAuth0(App);
