import axios from 'axios';

  export const getPosts = () => {
    return axios.get('/api/blog')
      .then(res => res)
      .catch(err => err);
  }

  export const addPost = props => {
    return axios.post('/api/blog', props)
    .then(res => res)
    .catch(err => err)
  }

  export const editPost = props => {
    console.log('editPost', props)
    return axios.put(`/api/blog/${props._id}`, props)
    .then(res => res)
    .catch(err => err)
  }

  export const getPost = props => {
    return axios.get(`/api/blog/${props}`)
    .then(res => res)
    .catch(err => err)
  }

  export const removePost = props => {
    return axios.delete(`/api/blog/${props}`)
    .then(res => res)
    .catch(err => err)
  }
