import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';

class LoginForm extends Component {

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
                                <Form.Input fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                    <Button color='purple' fluid size='large'>
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
