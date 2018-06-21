// Update post actions
export const UPDATING_POST_START = 'UPDATING_POST_START';
export const UPDATING_POST_END = 'UPDATING_POST_END';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// Delete post actions
export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

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

import { getPost, getPosts, addPost, editPost, removePost } from '../api/blogApi';

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

// Delete Post
export const deletePost = postId => {
  return function(dispatch) {
    return removePost(postId)
    .then(post => {
      dispatch(deletePostSuccess)
    })
    .catch(err => {
      dispatch(deletePostFailure)
    })
  }
};

export const deletePostSuccess = post => {
  return { type: DELETE_POST_SUCCESS, post }
}

export const deletePostFailure = post => {
  return { type: DELETE_POST_FAILURE, post }
}

// Update post
export const updatePost = post => {
  return function(dispatch) {
    return editPost(post)
    .then(post => {
      console.log('dispatching update post success')
      dispatch(updatePostSuccess)
    })
    .catch(err => {
      dispatch(updatePostFailure)
    })
  }
};

export const updatingPostStart = () => {
  return { type: UPDATING_POST_START, isEditing: true }
}

export const updatingPostEnd = post => {
  return { type: UPDATING_POST_END, isEditing: false }
}

export const updatePostSuccess = post => {
  return { type: UPDATE_POST_SUCCESS, post }
}

export const updatePostFailure = post => {
  return { type: UPDATE_POST_FAILURE, post }
}
