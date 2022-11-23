import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlicer";
import { postReducer } from '../features/Post/PostSlicer';

export const allReducers = combineReducers({ postReducer, authReducer });


export const store = configureStore({
  reducer: {
    Auth: allReducers
  }
})