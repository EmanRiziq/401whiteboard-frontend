import React, { Component } from 'react';
import axios from 'axios';
import base64 from 'base-64';
import { When } from 'react-if';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
    }

    handleSignup = async (e) => {
        e.preventDefault();
        const data = {
            userName: e.target.username.value,
            password: e.target.password.value
        };

        await axios.post(`${process.env.REACT_APP_PORT}/signup`, data).then(res => {
            this.setState({
                loggedin: true
            })
            console.log(res);
        }).catch(e => console.log(e))
    }


    render() {
        return (
            <>
                <When condition={!this.loggedin}>
                    <div>
                        <h2>Sign up</h2>
                        <form action="" onSubmit={this.handleSignup}>
                            <input type="text" placeholder='username' name='username' />
                            <input type="text" placeholder='password' name='password' />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </When>
                <When condition={this.loggedin}>
                    <h1>Hello I am authorized</h1>
                </When>
            </>
        );
    }
}

export default Signup;