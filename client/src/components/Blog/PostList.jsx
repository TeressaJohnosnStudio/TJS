import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import Post from './Post';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => {
            return (
              <li className="post" key={post._id}>
                <Link to={`/blog/${post._id}`}>{post.title}</Link>
                <div className="post-date">{post.date}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;
