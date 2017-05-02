import React from 'react';
import './Hello.scss';

import logo from './React_logo.png';

class Hello extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
        <img src={logo} />
        <p>Have fun and enjoy it<br/> Lucy </p>
      </div>
    );
  }
}

export default Hello;
