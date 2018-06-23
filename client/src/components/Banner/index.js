import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';



export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles  = {
      background: `url(${this.props.img}) no-repeat fixed center center`
    }
    return (
      <div id="banner-container">
        <div style={styles} id="banner"></div>
        <div className="banner-caption"><h2>{this.props.caption}</h2></div>
        <div className="shade"></div>
      </div>
    )
  }
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  caption: PropTypes.string
}
