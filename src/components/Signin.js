import React, { Component } from 'react';
import axios from "axios";
import base64 from "base-64";
import cookies from 'react-cookies';


class Signin extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        const URL = process.env.REACT_APP_PORT|| 'https://eman-whiteboard.herokuapp.com'
        // const URL = 'https://eman-whiteboard.herokuapp.com'
        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
        axios.post(`${URL}/login`, {}, {
            headers: {
                Authorization: `Basic ${encodedCredintial}`
            }
        })
            .then(res => {
                console.log(res.data);
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName)
                this.props.isAutherized(true);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div >
                <div>
                    <h2> Please Sign in</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='username' name='username' required={true}/>
                        <input type="password" placeholder='password' name='password' required={true}/>
                        <button type="submit">Sign in</button>
                    </form>
                </div>
                {/* <h1>Hello I am authorized</h1> */}
            </div>
        );
    }
}

export default Signin;