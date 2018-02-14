import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

class ContactPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Navigation />
        <div className="contact">
          <p>We are located at:<a href="https://goo.gl/maps/9iYz4N7VCus">26 S. Villa Ave<br/>Villa Park, IL 60181</a></p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactPage;