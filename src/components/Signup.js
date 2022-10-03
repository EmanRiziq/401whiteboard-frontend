import React, { useState } from 'react';
// import axios from 'axios';
// import cookies from 'react-cookies';
import { useAuth } from '../Context/AuthContext';



function Signup() {
    // const [roletype, setroletype] = useState("")

    const { handleSignup } = useAuth();


    const onChangeValue = (event) => {
        // setroletype({ roletype: event.target.value })
    }

    return (
        <>
                <div>
                    <h2> new user?</h2>
                    <h5>Sign up</h5>
                    <form action="" onSubmit={handleSignup}>
                        <input type="text" placeholder='username' name='username' required={true} />
                        <input type="text" placeholder='password' name='password' required={true} />
                        <input type="text" placeholder='confirm password' name='confirmpassword' required={true} />
                        <div >
                            <input type="radio" value="user" name="role"
                                checked
                                onChange={onChangeValue}
                            /> User
                            <input type="radio" value="admin" name="role"
                                onChange={onChangeValue} />
                            Admin
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
        </>
    );
}

export default Signup;