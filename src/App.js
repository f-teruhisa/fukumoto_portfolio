import React, { Component } from 'react';

import './App.css';

import Header from './components/Header.js';
import Contents from './components/Contents.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default App;
