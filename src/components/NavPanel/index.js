import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Header, Menu, Segment } from 'semantic-ui-react'



class NavPanel extends Component {

    render() {

        return (
            <Segment>
                <Grid centered>
                    <Grid.Column mobile={16} tablet={10} computer={10}>
                        <Menu>
                            <Link to='/login'>
                                <Menu.Item>
                                    Back to login
                                </Menu.Item>
                            </Link>
                            <Link to='/aboutUs'>
                                <Menu.Item>
                                    about us
                                </Menu.Item>
                            </Link>
                            <Link to='/profile'>
                                <Menu.Item>
                                    profile
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default NavPanel;