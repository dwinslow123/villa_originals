import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';


ReactDOM.render(
    <Router>
      <div className="App">
        <Route exact path="/" component={ App } />
        <Route path="/services" component={ ServicesPage } />
        <Route path="/contact" component={ ContactPage } />
      </div>
    </Router>,
  document.getElementById('root'));
registerServiceWorker();
