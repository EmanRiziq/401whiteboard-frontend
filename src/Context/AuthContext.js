import { createContext, useContext, useState } from "react";
import axios from "axios";
import base64 from "base-64";
import cookies from 'react-cookies';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = props => {
    const [user, setUser] = useState({
        token: '',
        userID: 0,
        userName: '',
        role: ''
    });

    const [autherized, setAutherized] = useState((cookies.load("token")?true:false))
    const isAutherized = (authValue) => {
        setAutherized({ autherized: authValue })

    }

    const handleSignup = async (e) => {
        e.preventDefault();
        if (e.target.password.value === e.target.confirmpassword.value) {
            const data = {
                userName: e.target.username.value,
                password: e.target.password.value,
                role: e.target.role.value
            };
            const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
            await axios.post(`${URL}/signup`, data).then(res => {
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName);
                cookies.save('role', res.data.role);
                setUser({
                    token: res.data.token,
                    userID: res.data.id,
                    userName: res.data.userName,
                    role: res.data.role
                })
                setAutherized({ autherized: true })
                console.log("signed up")
            }).catch(e => console.log(e))
        }
        else {
            alert('Passwords do not match');
        }
    }

    const handleSignin = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
        axios.post(`${URL}/signin`, {}, {
            headers: {
                Authorization: `Basic ${encodedCredintial}`
            }
        })
            .then(res => {
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName);
                cookies.save('role', res.data.role);
                setUser({
                    token: res.data.token,
                    userID: res.data.id,
                    userName: res.data.userName,
                    role: res.data.role
                })
                setAutherized({ autherized: true })
            })
            .catch(err => console.log(err));
    }

    const handelSignOut = () => {
        cookies.remove('token')
        cookies.remove('userName')
        cookies.remove("userID");
        cookies.remove("role")
        setUser({
            token: '',
            userID: 0,
            userName: '',
            role: ''
        })
        setAutherized({ autherized: false })
        window.location.reload(false);
    }

    const value = { user, autherized, isAutherized, handleSignup, handleSignin, handelSignOut };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;