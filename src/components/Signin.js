import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { When } from 'react-if';

function Signin() {

    const { handleSignin } = useAuth();

    return (
        <>
            <div>
                <h2> Please Sign in</h2>
                <form action="" onSubmit={handleSignin}>
                    <input type="text" placeholder='username' name='username' required={true} />
                    <input type="password" placeholder='password' name='password' required={true} />
                    <button type="submit">Sign in</button>
                </form>
            </div>
            {/* <When condition={autherized}>
                <h1>Hello I am authorized sign in</h1>
            </When> */}
        </>

    );
}

export default Signin;