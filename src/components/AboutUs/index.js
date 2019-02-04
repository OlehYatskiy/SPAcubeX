import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import classes from './index.less';

class UserProfile extends Component {

    render() {
        return (
          <div>
            <Segment floated='right'>
              <Link to='/login'>
                LogIn
              </Link>
              <Link to='/register'>
                SignUp
              </Link>
            </Segment>
            <Grid textAlign="center">
              <Grid.Column mobile={16} tablet={8} style={{ border: '1px dotted grey' }}>
                <Header as='h1'>About Us</Header>
                <p>
                  Leo vel orci porta non pulvinar neque. Cursus euismod quis viverra nibh cras pulvinar mattis.
                  Ipsum consequat nisl vel pretium lectus. Sed vulputate mi sit amet mauris.
                  Scelerisque purus semper eget duis at tellus at.
                  Cras pulvinar mattis nunc sed.
                  Commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                  Volutpat odio facilisis mauris sit amet.
                  Pellentesque dignissim enim sit amet venenatis. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit duis. Proin nibh nisl condimentum id venenatis a.
                  Quis enim lobortis scelerisque fermentum. Habitasse platea dictumst
                  quisque sagittis purus sit amet
                </p>
              </Grid.Column>
            </Grid>
          </div>

        )
    }
}

export default UserProfile;
