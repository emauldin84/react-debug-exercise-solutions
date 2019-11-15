import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {

    constructor(props) {
    super(props);

    // should be this.state
    this.state = { 
      showLogoutButton: false
    };
  }

  handleLogoutButton() {
    this.setState(prevState => ({
      showLogoutButton: !prevState.showLogoutButton
    }));
  }

  render() {
    let sessionButton;
    // pulls in this.props.showLoginForm for show logout button logic. Many ways to handle this same logic...
      sessionButton = (!this.props.showLoginForm ? <button className='flat-button border-gray' onClick={this.props.handleLogout}>Sign Out</button> : null);
    
    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;