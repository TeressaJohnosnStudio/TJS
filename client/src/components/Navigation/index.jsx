import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import './style.scss';

export default class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
        <ul>
        <img src={require('./assets/teressa-logo-final.jpg')}/>
          <li><Link to="/subscribe">Subscription</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    )
  }
}
