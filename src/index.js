import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';


ReactDOM.render(
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ App } />
        <Route path="/services" component={ ServicesPage } />
        <Route path="/contact" component={ ContactPage } />
        <Footer />
      </div>
    </Router>,
  document.getElementById('root'));
