import React, { Component } from 'react';

class Hamburger extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.toggleNav();
  }

  render() {
    return (
      <div onClick={this.onClick} id="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => dispatch(toggleNav()),
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.nav.isOpen
  }
}

export default connect(mapStateToProps)(Hamburger);
