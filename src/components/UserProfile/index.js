import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';

class UserProfile extends Component {

    render() {
        return (
            <div className={classes.userProfile}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 1024 }}>
                        <Grid textAlign='center' stackable columns='equal'>
                            <Grid.Row style={{ border: '2px dotted grey' }} >
                                <Grid.Column floated='left' mobile={16} tablet={4} computer={4} style={{ border: '1px dotted grey' }} >
                                    <Image centered src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' rounded />
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle' style={{ border: '1px dotted grey' }} >
                                    <Header as='h2'>
                                        Firstname Lastname
                                    </Header>
                                    <Header floated='right' as='h3'>
                                        Email
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default UserProfile;