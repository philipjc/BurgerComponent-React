'use strict';
import React from 'react';
import BurgerNav from './burger-nav';

class BurgerIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: '',
      name: 'Menu'
    }
    this.activateMenu = this.activateMenu.bind(this);
  }

  activateMenu() {
    if (this.state.open === '') {
      this.setState({
        open: 'open',
        name: 'Close'
      })
    } else {
      this.setState({
        open: '',
        name: 'Menu'
      })
    }
  }

  render() {

    return (
      <div>
        <div className={ this.state.open + " burger-contain" }>
          <div className="burger" onClick={ this.activateMenu }>
            <div className="bun bun-top"></div>
            <div className="bun bun-mid"></div>
            <div className="bun bun-bottom"></div>
          </div>

          <a href="#" className="burger-brand" onClick={ this.activateMenu }>{ this.state.name }</a>
        </div>
        <BurgerNav openNav={ this.state.open } />
      </div>
    );
  }
};
export default BurgerIcon;
