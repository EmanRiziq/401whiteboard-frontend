import React from 'react'
import { ADD_POST, EDIT_COMMENT,ADD_COMMENT, selectPost} from './PostSlicer';
import { useDispatch, useSelector } from 'react-redux';

export default function Post() {
  const Post = useSelector(selectPost)
  const dispatch = useDispatch();

  return (
    <div>
    </div>
  )
}