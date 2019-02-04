import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';

import classes from './index.less';

class App extends Component {

    render() {
        return (
            <div >
                <Switch>
                    <Route exact path={"/login"} component={LoginForm} />
                    <Route path={"/register"} component={RegisterForm} />
                    <Route path={"/profile"} component={UserProfile} />
                </Switch>
            </div>
    )
  }
}

export default withRouter(App);
