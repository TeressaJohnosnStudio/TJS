import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


export default class Navigation extends React.Component {
  render() {
    return (
      <div id="admin-navigation">
        <ul>
          <li><Link to="/admin/blog/add">+ New Blog Post</Link></li>

        </ul>
      </div>
    )
  }
}
