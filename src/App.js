import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TweetButton from './components/TweetButton';
import LandingPage from './scenes/LandingPage';

class App extends Component {
  render() {
    return (
      <LandingPage />
    );
  }
}

export default App;
