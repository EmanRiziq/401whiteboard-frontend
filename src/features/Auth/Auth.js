import React from 'react'
import { REQUEST_LOGIN, LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT ,selectAuth } from './authSlicer';
import { useDispatch, useSelector } from 'react-redux';


export default function Auth() {
  const countauther = useSelector(selectAuth)
  const dispatch = useDispatch();

  return (
    <div>
      {/* <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment())}>+</button> */}
    </div>
  )
}