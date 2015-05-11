import React from 'react';

var data = {
  title: "My React Starter with ES6",
  logo: "./img/reactLogo.svg"
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div className="header clear">
        <div className="header__title">
          <div className="header__title-title">
            <h1>
            <img src={ this.state.data.logo }  alt="" />
            { this.state.data.title }
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
