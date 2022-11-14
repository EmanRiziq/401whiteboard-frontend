import axios from "axios";
import { actionType } from "../config/constant";
import cookies from 'react-cookies';



export const login = (dispatch, payload) => {
    try {
        dispatch({ type: actionType.REQUEST_LOGIN })
        // console.log("ttttttt",payload);
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const temp = axios.post(`${URL}/signin`, {}, {
            headers: {
                Authorization: `Basic ${payload}`
            }
        })
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
