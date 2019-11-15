import React, { Component } from 'react';
import '../styles/App.css';

// should be extends
class Footer extends Component {
  render() {
    return (
      <div>
        <div className='footer-anchor'></div>
        <div className='app-footer'></div>
      </div>
    );
  }
}

export default Footer;