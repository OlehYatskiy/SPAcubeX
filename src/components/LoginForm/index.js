import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';
import axios from "axios";
const ls = require('local-storage');

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        invalidEmail: false,
        invalidPassword: false,
        disabledSignInButton: true
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

    }

    onPasswordInputChange = (event) => {
        const { password, invalidPassword } = this.state;
        const inputVal = event.target.value;

        this.setState({
            password: inputVal,
            InvalidPassword: (inputVal.length > 6) ? false : true
        });

    }

    onSignInButtonClick = () => {

        const { password , email } = this.state;

        let data = {
            password: password,
            email: email
        }

        axios.post('http://localhost:4000/login', data).then((response) => {
            console.log(response);
            ls.set('userToken', response.data.token);
            this.props.history.push("/profile");
        })
            .then((error) => {
                console.log(error);
            })
    }

    render() {


        return (
            <div className={classes.loginForm}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='purple' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    onChange={this.onEmailInputChange}
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                />
                                <Form.Input
                                    onChange={this.onPasswordInputChange}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    error={this.state.invalidPassword}
                                />
                                    <Button onClick={this.onSignInButtonClick}
                                        color='purple'
                                        fluid
                                        size='large'>
                                        Login
                                    </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?
                            <Link to='/register'>
                                Sign Up
                            </Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginForm;
