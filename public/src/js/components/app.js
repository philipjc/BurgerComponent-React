'use strict';
import React from 'react';
import Header from './header';
import BurgerIcon from './Burger/burger-icon';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <BurgerIcon />
      </div>
    )
  }
};
export default App;
