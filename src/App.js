import React, { Component } from 'react';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';

import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-145110574-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  render() {
    return (
      // <div className="main-app">
        <MainPage />
        // {/* <ContactPage /> */}
      // </div>
    );
  }
}

export default App;
