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
        if (e.target.password.value === e.target.confirmpassword.value) {
            const data = {
                userName: e.target.username.value,
                password: e.target.password.value
            };

            await axios.post('https://eman-whiteboard.herokuapp.com/signup', data).then(res => {
                this.setState({
                    loggedin: true
                })
                console.log(res);
            }).catch(e => console.log(e))
        }
        else {
            alert('Passwords do not match');
        }
    }


    render() {
        return (
            <>
                <When condition={!this.loggedin}>
                    <div>
                        <h2> new user?</h2>
                        <h5>Sign up</h5>
                        <form action="" onSubmit={this.handleSignup}>
                            <input type="text" placeholder='username' name='username' />
                            <input type="text" placeholder='password' name='password' />
                            <input type="text" placeholder='confirm password' name='confirmpassword' />

                            <button type="submit">Sign up</button>
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