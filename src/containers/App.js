import React, { Component } from 'react';
// navbar should be lowercase in path
import Navbar from '../components/navbar';
// uncomment the following import
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: true,
      showCheckmark: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  // change to arrow function to bind this
  handleLogin = () => {
    // not necessary
    // this.refs.navbutton.handleLogoutButton();
    this.setState({ 
      showLoginForm: false,
      showCheckmark: true
    });
  }

  handleLogout() {
    // not necessary
    // this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref='navbutton' handleLogout={this.handleLogout} showLoginForm={this.state.showLoginForm}/>
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={this.state.showCheckmark === true ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
