import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Post from './Post';
import { useAuth } from '../Context/AuthContext';
import { When } from 'react-if';
import { useEffect } from 'react';
import cookies from 'react-cookies';

function Auth(props) {
    const { user, autherized,isAutherized, handelSignOut } = useAuth();
    // console.log("user", user)
    useEffect(() => {
        if (cookies.load("token")) {
            isAutherized(true);
        }
    },[]);

    return (
            <div>
                <When condition={!autherized}>
                    <Signin />
                    <Signup />
                </When>

                <When condition={autherized}>
                    <h3> Hello {cookies.load("userName")}</h3>
                    <button onClick={handelSignOut}> Sign Out </button>
                    <Post />
                </When>
            </div>
    );
}

export default Auth;