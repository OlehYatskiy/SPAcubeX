import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';

import classes from './index.less';

class App extends Component {

    render() {
        return (
            <div >
              <LoginForm/>
              {/*<RegisterForm/>*/}
              {/*<UserProfile />*/}
            </div>
    )
  }
}

export default App;
