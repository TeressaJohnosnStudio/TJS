import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/blogActions';

import axios from 'axios';

const initialState = {
  posts: [],
  loading: true,
  error: null
}

const blog = (state = initialState, action) => {
  let post;
  switch (action.type) {

    case FETCH_POSTS:
      return { ...state, loading: true, error: null }

    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: [...action.posts], loading: false, error: null };

    case FETCH_POSTS_FAILURE:
      return { ...state, posts: [], loading: false, error: action.error };

    case CREATE_POST:
      return { ...state, loading: true, error: null }

    case CREATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false, error: null }

    case CREATE_POST_FAILURE:
      return { ...state, posts: [], loading: false, error: action.error }

    case DELETE_POST:
      return { post };

    default:
      return state;
  }
}

export default blog;
