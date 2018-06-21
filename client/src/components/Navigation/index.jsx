import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import './style.scss';
import logo from './assets/teressa-logo-final.jpg';

export default class Navigation extends React.Component {
  render() {
    return (

      <div id="navigation">
      <nav>
        <ul className="clearfix">
          <li><Link to="/subscribe">Subscription</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/"><img src={logo}/></Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        </nav>
      </div>
    )
  }
}
