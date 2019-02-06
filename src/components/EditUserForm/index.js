import React, { Component } from 'react';
import axios from 'axios';

import { Button, Grid, Segment, Input } from 'semantic-ui-react'

import classes from './index.less';

class EditUserForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    imageFile: '',
    invalidUsername: false,
    invalidEmail: false,
    invalidPassword: false,
    invalidImageFile: false,
    disabledApllyButton: true
  }

  isEnableApplyButton = () => {
    const { username,
        email,
        password,
        imageFile,
        invalidUsername,
        invalidEmail,
        invalidPassword,
        invalidImageFile,
        disabledApllyButton
    } = this.state;

    this.setState( (state, props) => ({
        disabledApllyButton: state.invalidUsername || state.invalidEmail ||
         state.invalidImageFile || state.invalidPassword ||
         !state.username || !state.email ||
         !state.password || !state.imageFile
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
  }

  onUsernameInputChange = (event) => {
    const { username, invalidUsername } = this.state;
    const namesRegExp = /[^a-zA-ZА-Яа-яіІїЇєЄ'ёЁ]/;
    const inputVal = event.target.value;

    this.setState({
        username: inputVal,
        invalidUsername: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });

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
      invalidPassword: (inputVal.length > 6) ? false : true
    });

  }

    onImageFileInputChange = (event) => {
        const { imageFile, invalidImageFile } = this.state;
        const imageRegExp = /\.(jpg|png|svg|ico)\b/i;
        const inputVal = event.target.value;

        this.setState({
            imageFile: inputVal,
            invalidImageFile: imageRegExp.test(inputVal) ? false : true
        });

    }

  onApplyButtonClick = () => {

     const { username, password , email,  } = this.state;


     let data = {
      name: firstName,
      password: password,
      email: email
    }

    axios.post('http://localhost:4000/updateUser', data).then((response) => {
      console.log(response);
    })
    .then((error) => {
      console.log(error);
    })
  }



    render() {
      const {
          invalidUsername,
          invalidEmail,
          invalidPassword,
          invalidImageFile,
        disabledApllyButton
      } = this.state;

        return (
            <Segment>
                <Grid stackable columns={2}>
                    <Grid.Column textAlign="right">
                        <Segment.Group >
                            <Segment basic>
                                <Input onChange={this.onUsernameInputChange}
                                       onBlur={this.onBlurHandler}
                                       ref={this.handleRef}
                                       name='username'
                                       error={invalidUsername}
                                />
                            </Segment>
                            <Segment basic>
                                <Input onChange={this.onEmailInputChange}
                                       onBlur={this.onBlurHandler}
                                       name='email'
                                       error={invalidEmail}
                                />
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Segment.Group>
                            <Segment basic>
                                <Input onChange={this.onImageFileInputChange}
                                       onBlur={this.onBlurHandler}
                                       name='imageFile'
                                       error={invalidImageFile}
                                />
                            </Segment>
                            <Segment basic>
                                <Input onChange={this.onPasswordInputChange}
                                       onBlur={this.onBlurHandler}
                                       name='password'
                                       error={invalidPassword}
                                />
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default EditUserForm;
