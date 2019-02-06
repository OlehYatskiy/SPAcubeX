import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';

class RegisterForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    invalidFirstName: false,
    invalidLastName: false,
    invalidEmail: false,
    invalidPassword: false,
    disabledApllyButton: true
  }

  isEnableApplyButton = () => {
    const { firstName,
      lastName,
      email,
      password,
      invalidFirstName,
      invalidLastName,
      invalidEmail,
      invalidPassword,
      disabledApllyButton,
    } = this.state;

    this.setState( (state, props) => ({
        disabledApllyButton: state.invalidFirstName || state.invalidLastName ||
        state.invalidEmail || state.invalidPassword ||
        !state.firstName || !state.lastName ||
        !state.email || !state.password
      }));
  }

  onBlurHandler = (event) => {
    const name = event.target.name;
    const char = name.charAt(0);
    const invalidVal = 'invalid' + name.replace(char, char.toUpperCase());

    if (this.state[invalidVal] === false) {
      this.setState({
        [invalidVal]: event.target.value === '' ? true : false
      });
    }
    this.isEnableApplyButton();
  }

  onFirstNameInputChange = (event) => {
    const { firstName, invalidFirstName } = this.state;
    const namesRegExp = /[^a-zA-ZА-Яа-яіІїЇєЄ'ёЁ]/;
    const inputVal = event.target.value;

    this.setState({
      [event.target.name]: inputVal,
      invalidFirstName: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onLastNameInputChange = (event) => {
    const { lastName, invalidLastName } = this.state;
    const namesRegExp = /[^a-zA-ZА-Яа-яіІїЇєЄ'ёЁ]/;
    const inputVal = event.target.value;

    this.setState({
      lastName: inputVal,
      invalidLastName: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onEmailInputChange = (event) => {
    const { email, invalidEmail } = this.state;
    const emailRegExp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    const inputVal = event.target.value;

    this.setState({
      email: inputVal,
      invalidEmail: (emailRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ? false : true
    });
    this.isEnableApplyButton();
  }

  onPasswordInputChange = (event) => {
    const { password, invalidPassword } = this.state;
    const inputVal = event.target.value;

    this.setState({
      password: inputVal,
      InvalidPassword: (inputVal.length > 6) ? false : true
    });
    this.isEnableApplyButton();
  }

  onApplyButtonClick = () => {
    this.props.history.push("/login")
    let data = {
      name: 'Oleh',
      password: '1234',
      email: 'mymail@.com'
    }

    // let header = {
    //   'x-access-token',
    // }

    axios.post('http://localhost:4000/registration', data).then((response) => {
      console.log(response);
    })
    .then((error) => {
      console.log(error);
    })
  }



    render() {
      const {
        invalidFirstName,
        invalidLastName,
        invalidEmail,
        InvalidPassword,
        disabledApllyButton
      } = this.state;

        return (
            <div className={classes.registerForm}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 550 }}>
                        <Header as='h2' color='purple' textAlign='center'>
                            Sign Up
                            <Header.Subheader>
                                Back to
                                <Link to='/login'>
                                    LogIn
                                </Link>
                            </Header.Subheader>
                        </Header>
                        <Form size='large'>
                            <Segment>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        onChange={this.onFirstNameInputChange}
                                        fluid
                                        label='FirstName'
                                        placeholder='First name'
                                        maxlength='10'
                                        error={invalidFirstName}
                                    />
                                    <Form.Input
                                        onChange={this.onLastNameInputChange}
                                        fluid
                                        label='LastName'
                                        placeholder='Last name'
                                        error={invalidLastName}
                                    />
                                </Form.Group>
                                <Form.Input
                                    onChange={this.onEmailInputChange}
                                    label='enter your email and password'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    error={invalidEmail}
                                />
                                <Form.Input
                                    onChange={this.onPasswordInputChange}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    error={InvalidPassword}
                                />
                              <Button onClick={this.onApplyButtonClick}

                                  color='purple'
                                  fluid
                                  size='medium'>
                                    Register me
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default RegisterForm;
