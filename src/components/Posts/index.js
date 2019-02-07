import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import NavPanel from '../NavPanel';

import classes from './index.less';

class Posts extends Component {

    render() {

        const gridstyle = {
            maxWidth: '1000px',
            // marginTop: '100px',
            fontSize: '1.55em'
        }

        return (
            <div>
                <NavPanel/>
                <Grid textAlign="center">
                    <Grid.Column mobile={16} tablet={14} style={gridstyle}>
                        posts!
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default Posts;