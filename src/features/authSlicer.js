import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
};

export const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        REQUEST_LOGIN: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        LOGIN_SUCCESS: (state) => {
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                loading: false,
                isAuth: true
            }
        },
        LOGIN_FAILED: (state) => {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                isAuth: false
              }
        },
        LOGOUT: (state) => {
            return {
                ...state,
                user: {},
                isAuth: false,
                token: ''
              }
        }
    }
})

export const selectAuth = (state) => state.Auth.value


export const {  REQUEST_LOGIN, LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT } = authSlicer.actions;
export default authSlicer.reducer;