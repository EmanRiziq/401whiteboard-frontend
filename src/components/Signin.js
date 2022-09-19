import React, { Component } from 'react';
import axios from "axios";
import base64 from "base-64";
import { When } from 'react-if';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        };

        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
        axios.post('https://eman-whiteboard.herokuapp.com//login', {}, {
            headers: {
                Authorization: `Basic ${encodedCredintial}`
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    loggedin: true
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div >
                <When condition={!this.loggedin}>
                    <div>
                        <h2>Sign in</h2>
                        <form action="" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='username' name='username' />
                            <input type="password" placeholder='password' name='password' />
                            <button type="submit">login</button>
                        </form>
                    </div>
                </When>
                <When condition={this.loggedin}>
                    <h1>Hello I am authorized</h1>
                </When>
            </div>
        );
    }
}

export default Signin;