import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';

class RegisterForm extends Component {

    render() {
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
                                        fluid
                                        label='FirstName'
                                        placeholder='First name'
                                        maxlength='10'
                                    />
                                    <Form.Input
                                        fluid
                                        label='LastName'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                                <Form.Input
                                    label='Email'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                <Button color='purple' fluid size='medium'>
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