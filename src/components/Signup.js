import React, { Component } from 'react';
import axios from 'axios';
import { When } from 'react-if';
import cookies from 'react-cookies';


class Signup extends Component {
    constructor(props) {
        super(props);
       
    }

    handleSignup = async (e) => {
        e.preventDefault();
        if (e.target.password.value === e.target.confirmpassword.value) {
            const data = {
                userName: e.target.username.value,
                password: e.target.password.value
            };
            const URL = process.env.REACT_APP_PORT|| 'https://eman-whiteboard.herokuapp.com'
            // const URL = 'https://eman-whiteboard.herokuapp.com'
            await axios.post(`${URL}/signup`, data).then(res => {
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName)
                this.props.isAutherized(true);
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
                            <input type="text" placeholder='username' name='username' required={true} />
                            <input type="text" placeholder='password' name='password' required={true} />
                            <input type="text" placeholder='confirm password' name='confirmpassword' required={true} />
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