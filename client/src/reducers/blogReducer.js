import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATING_POST_START,
  UPDATING_POST_END,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/blogActions';

import axios from 'axios';

const initialState = {
  posts: [],
  currentPost: null,
  isEditing: false,
  loading: true,
  error: null,
}

const blog = (state = initialState, action) => {
  let post;
  let newPosts;

  switch (action.type) {

    //Fetch Post
    case FETCH_POSTS:
      return { ...state, loading: true, error: null, isEditing: false }

    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: [...action.posts], loading: false, error: null, isEditing: false };

    case FETCH_POSTS_FAILURE:
      return { ...state, posts: [], loading: false, error: action.error };

    //Create Post
    case CREATE_POST:
      return { ...state, loading: true, error: null, isEditing: false }

    case CREATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false, error: null, isEditing: false }

    case CREATE_POST_FAILURE:
      return { ...state, posts: [], loading: false, error: action.error }

    // Update Posts
    case UPDATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false, error: null, isEditing: false }

    case UPDATING_POST_START:
      return { ...state, posts: [...state.posts], loading: false, error: null, isEditing: true }

    case UPDATING_POST_END:
      return { ...state, posts: [...state.posts], loading: false, error: null, isEditing: true, isEditing: false }

    //Delete Post
    case DELETE_POST:
      return { post };

    default:
      return state;
  }
}

export default blog;
