import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import NavPanel from '../NavPanel';

import classes from './index.less';
import axios from "axios";
import EditUserForm from "../EditUserForm";
const ls = require('local-storage');

class UserProfile extends Component {

    state = {
        showEditUser: false,
        userName: 'userName',
        email: 'Email',
        imageFile: ''
    }

    componentDidMount() {
        // console.log('did mount');
        // let lstoken = ls.get('userToken');
        // let data = {
        //     token: lstoken
        // }
        // // const token = ls.get('userToken');
        //
        // axios.get('http://localhost:4000/get-profile', data).then((response) => {
        //     console.log(response);
        // })
        //     .then((error) => {
        //         console.log(error);
        //     })
    }

    onShowEditUserForm = () => {
        const {showEditUser} = this.state;
        this.setState({
            showEditUser: !showEditUser
        })
    }

    render() {
        const {
            showEditUser,
            userName,
            email,
            imageFile
        } = this.state;

        const userImage = imageFile ?
            imageFile
            :
            'https://react.semantic-ui.com/images/wireframe/square-image.png';

        return (
            <div className={classes.userProfile}>
                <NavPanel/>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 1024 }}>
                        <Grid textAlign='center' stackable columns='equal'>
                            <Grid.Row >
                                <Grid.Column floated='left' mobile={16} tablet={4} computer={4} >
                                    <Image centered src={userImage} size='medium' rounded />
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle' >
                                    <Header as='h2'>
                                        My profile
                                    </Header>
                                    <Segment textAlign='right' clearing>
                                      <Header as='h3'>
                                          {userName}
                                      </Header>
                                    </Segment>
                                    <Segment textAlign='right' clearing>
                                      <Header as='h3'>
                                          {email}
                                      </Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Segment textAlign='right'>
                          <Header as='h3'>
                            something else
                          </Header>
                        </Segment>
                        {
                            showEditUser ?
                                <EditUserForm onShowEditUserForm={this.onShowEditUserForm} />
                                :
                                <Button content="Edit profile" onClick={this.onShowEditUserForm}/>
                        }
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default UserProfile;
