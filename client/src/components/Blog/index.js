import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost, deletePost, fetchPosts, fetchPost } from '../../actions/blogActions';
import Post from './Post';
import PostList from './PostList';

class Blog extends Component {

  componentDidMount = () => {
    console.log('fetching posts')
    this.props.fetchPosts();
  }

  render() {
    const { loading, posts, error } = this.props;
    console.log('Fetched posts', posts)

    if(error) {
      return <div id="error">{error}</div>
    }

    return (
      <section id="blog">
        <div>
          {loading
            ? <div id="loading">Loading</div>
            : <PostList posts={posts} />
          }
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post => dispatch(deletePost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: null
   }
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
