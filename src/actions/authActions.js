import axios from "axios";
import { actionType } from "../config/constant";
import cookies from 'react-cookies';


export const login = (dispatch, payload) => {
    try {
        dispatch({ type: actionType.REQUEST_LOGIN })
        console.log(payload);
        const temp = axios.post(`${URL}/signin`, {}, {
            headers: {
                Authorization: `Basic ${payload}`
            }
        })
        console.log('temp ', temp)
            .then(res => {
                dispatch({ type: actionType.LOGIN_SUCCESS, payload: res.data });
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.id);
                cookies.save('userName', res.data.userName);
                cookies.save('role', res.data.role);
                cookies.save('capabilities', res.data.capabilities);
                // setAutherized({ autherized: true })
            })
            .catch(err => dispatch({ type: actionType.LOGIN_FAILED, payload: err }));
    } catch (e) {
        dispatch({ type: actionType.LOGIN_FAILED, payload: e });
    }
}


export const logoutHandler = (dispatch) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    dispatch({ type: actionType.LOGOUT });
}