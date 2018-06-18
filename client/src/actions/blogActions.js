const axios = require('axios');

export const UPDATE_POST = 'UPDATE_POST';
export const POST_DELETE = 'DELETE_POST';

//Fetch all post actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

//Fetch one post actions
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

//Create post actions
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

import { getPost, getPosts, addPost } from '../api/blogApi';

//Fetch Posts
export const fetchPosts = () => {
  return function(dispatch) {
    return getPosts()
    .then(posts => {
      dispatch(fetchPostsSuccess(posts));
    })
    .catch(err => {
      dispatch(fetchPostsFailure(posts));
    });
  }
}

export const fetchPostsSuccess = posts => {
  console.log('fetch posts', posts.data);
  return { type: FETCH_POSTS_SUCCESS, posts: posts.data }
}

export const fetchPostsFailure = () => {
  return { type: FETCH_POSTS_FAILURE, posts }
}

//Fetch one Post
export const fetchPost = post => {
  return function(dispatch) {
    return getPost()
    .then(post => {
      dispatch(fetchPostSuccess(post));
    })
    .catch(err => {
      dispatch(fetchPostFailure(post));
    });
  }
}

export const fetchPostSuccess = post => {
  console.log('fetch post', posts.data);
  return { type: FETCH_POST_SUCCESS, post: post.data }
}

export const fetchPostFailure = () => {
  return { type: FETCH_POST_FAILURE, post }
}

//Create Post
export const createPost = (props) => {
  return function(dispatch) {
    return addPost(props)
    .then(post => {
      dispatch(createPostSuccess);
    })
    .catch(err => {
      dispatch(createPostFailure);
    })
  }
}

export const createPostSuccess = (post) => {
  return { type: CREATE_POST_SUCCESS, post }
}

export const createPostFailure = (post) => {
  return { type: CREATE_POST_FAILURE, post }
}

export const updatePost = post => ({ type: UPDATE_BLOG, payload: post });
export const deletePost = post => ({ type: DELETE_BLOG, payload: post });
