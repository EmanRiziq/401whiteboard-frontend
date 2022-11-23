import { createSlice } from "@reduxjs/toolkit";

export const initState = {
    posts: true,
    Comments: false,
    err: '',
  }

export const postSlicer = createSlice({
    name: 'post',
    initialState,
    reducers: {
        ADD_POST: (state) => {
            return {
                ...state,
                showSignIn: true,
                err: '',
            }
        },
        EDIT_COMMENT: (state) => {
            return {
                ...state,
                err: `${payload}`,
            }
        },
        ADD_COMMENT: (state) => {
            return {
                ...state,
                showSignIn: false,
                err: ''
              }
        },
    }
})

export const selectPost = (state) => state.post.value


export const {  ADD_POST, EDIT_COMMENT,ADD_COMMENT } = postSlicer.actions;
export default postSlicer.reducer;