import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from "../actions/postActions";
import { POST_CREATE_RESET } from '../constants/postConstants';

function PostListPage({ history, match }) {
    const dispatch = useDispatch()
    const postCreate = useSelector((state) => state.postCreate);
    const { success: successCreate, post: createdPost } = postCreate;
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
  
    useEffect(() => {
      dispatch({ type: POST_CREATE_RESET })
  
      if (!userInfo) {
          history.push('/login')
      }
  
      if (successCreate) {
          history.push(`/post/${createdPost._id}/edit`)
      } else {
          console.log('something bad happened')
      }
  
  }, [dispatch, history, userInfo, successCreate, createdPost])
  
  const createPostHandler = () => {
      dispatch(createPost())
  }
    return <div>
    <i className="fas fa-file-upload fa-10x"  id="mainUpload" onClick={createPostHandler}></i>
  </div>;
}

export default PostListPage;
