import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './style.scss';

import logo from './assets/teressa-logo-final.jpg';

export default class Navigation extends React.Component {
  render() {
    return (
      <section>
        <div id="navigation">
        <nav>
          <ul className="clearfix">
            <li id="subscriptsions"><Link to="/subscribe">Subscriptions</Link></li>
            <li id="gallery"><Link to="/gallery">Gallery</Link></li>
            <li id="reviews"><Link to="/reviews">Press</Link></li>
            {/* <li id="info"><Link to="/info">Info</Link></li> */}
            <li id="logo"><Link to="/"><img src={logo}/></Link></li>
            {/* <li><Link to="/faq">FAQ</Link></li> */}
            <li id="about"><Link to="/about">About</Link></li>
            <li id="contact"><Link to="/contact">Contact</Link></li>
            <li id="blog"><Link to="/blog">Blog</Link></li>
          </ul>
          </nav>
        </div>
      </section>
    )
  }
}
