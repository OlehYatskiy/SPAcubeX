import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { IndexRedirect } from 'react-router';


import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';
import AboutUs from './components/AboutUs';
import Posts from './components/Posts';

import classes from './index.less';

class App extends Component {

    render() {
        return (
            <div>
              <Switch>
                  <Redirect from="/" exact to="/login" />
                    <Route path={"/aboutUs"} component={AboutUs} />
                    <Route path={"/login"} component={LoginForm} />
                    <Route path={"/register"} component={RegisterForm} />
                    <Route path={"/profile"} component={UserProfile} />
                    <Route path={"/posts"} component={Posts} />
              </Switch>
            </div>
    )
  }
}

export default withRouter(App);
