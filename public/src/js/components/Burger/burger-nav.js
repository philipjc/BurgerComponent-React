'use strict';
import React from 'react';
import NavItem from './nav-item';

var links = [
  {home: 'Home'},
  {about: 'About'},
  {portfolio: 'Portfolio'},
  {contact: 'Contact'}
];

class BurgerNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: links
    }
  }

  render() {

    let renderNav = (link, i) => {
      var navProps = {
        links: link,
        key: i
      }
      return <NavItem { ...navProps } />
    }
    let navLinks = this.state.links.map(renderNav);

    return (
      <div className={ this.props.openNav + " burger-nav"}>
        { navLinks }
      </div>
    );
  }
};
export default BurgerNav;
