import React, { Component } from 'react';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <MainPage />
        {/* <ContactPage /> */}
      </div>
    );
  }
}

export default App;
