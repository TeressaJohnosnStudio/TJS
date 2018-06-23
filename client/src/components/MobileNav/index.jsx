import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MobileNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul className="mobileNav">
          <li><Link to="/subscribe">Subscription</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li id="info"><Link to="/info">Info</Link></li>
          <li id="logo"><Link to="/"><img src={logo}/></Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.posts.posts.isOpen
  }
}

export default connect(mapStateToProps)(MobileNav);
