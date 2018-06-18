import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render from post compoenent')
    return (
      <li>
        <h1>{this.props.post.title}</h1>
        <article>{this.props.post.body}</article>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let post = { title: '', body: '', date: '' };
  let postId = ownProps.match.params._id;

  if(postId && state.posts.posts.length > 0) {
    post = state.posts.posts.find(post => postId === post._id)
  }

  return {
    post: { title: post.title, body: post.body, date: post.date }
  }
}

export default connect(mapStateToProps)(Post);
