import { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";
import base64 from "base-64";
import cookies from 'react-cookies';
import { login, logoutHandler } from "../actions/authActions";
import { AuthReducer } from "../reducers/authReducer";
import { initialState } from "../config/initials";




const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = props => {
    const [autherized, setAutherized] = useState((cookies.load("token") ? true : false))
    const isAutherized = (authValue) => {
        setAutherized({ autherized: authValue })

    }
    // const [user, setUser] = useState({});
    const [user, dispatch] = useReducer(AuthReducer, initialState)

    const handleSignup = async (name,password,confirmPassword,role) => {
        if (password === confirmPassword) {
            const data = {
                    userName: name,
                password: password,
                role: role
                // userName: e.target.username.value,
                // password: e.target.password.value,
                // role: e.target.role.value
            };
            console.log(data)
            const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
            await axios.post(`${URL}/signup`, data).then(res => {
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName);
                cookies.save('role', res.data.role);
                // setUser({
                //     token: res.data.token,
                //     userID: res.data.id,
                //     userName: res.data.userName,
                //     role: res.data.role,
                //     capabilities: res.data.capabilities
                // })
                setAutherized({ autherized: true })
                console.log("signed up")
            }).catch(e => console.log(e))
        }
        else {
            alert('Passwords do not match');
        }
    }
    const handleSignin = (name,password) => {
        console.log(name,password)
        const data = {
            username: name,
            password: password
            // username: e.target.username.value,
            // password: e.target.password.value
        };
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);

        login(dispatch, encodedCredintial);
    }

    const handelSignOut = () => {
        cookies.remove('token')
        cookies.remove('userName')
        cookies.remove("userID");
        cookies.remove("role")
        cookies.remove('capabilities');

        // setUser({
        //     token: '',
        //     userID: 0,
        //     userName: '',
        //     role: ''
        // })
        setAutherized({ autherized: false })
        window.location.reload(false);
    }

    const canDo = (role, ownerId) => {
        // console.log(cookies.load("capabilities"), cookies.load("role"))
        if (cookies.load("capabilities").includes(role) || parseInt(cookies.load("userID")) === ownerId) {
            return true;
        } else {
            return false;
        }
    };
    const value = { user, autherized, isAutherized, handleSignup, handleSignin, handelSignOut, canDo };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;