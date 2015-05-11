'use strict';
import React from 'react';

class NavItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeClass: ''
    }
    this.makeActive = this.makeActive.bind(this);
  }

  makeActive() {
    if (this.state.activeClass === '') {
      this.setState({
        activeClass: 'active'
      })
    } else {
      this.setState({
        activeClass: ''
      })
    }
  }

  render() {
    return (
        <li>
          <a className={ "burger-link " +  this.state.activeClass } href="#" onClick={ this.makeActive }>{ this.props.links }</a>
        </li>
    );
  }
};
export default NavItem;
