import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import '../css/styles.css';

class ContactPage extends Component {

  mapSelector = () => {
    if ((navigator.platform.indexOf("iPhone") !== -1) ||
        (navigator.platform.indexOf("iPad") !== -1) ||
        (navigator.platform.indexOf("iPod") !== -1))
       window.open("maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705");
  }

  render() {
    return (
      <div className="main-page">
        <Navigation />
        <div className="contact-main">
          <h2>Contact</h2>
        </div>
        <div className="contact">
          <div className="address contact-column">
            <img src="img/map.png" alt="map icon" />
            <p>We are located at:<a href="https://goo.gl/maps/9iYz4N7VCus" onClick={ this.mapSelector }>26 S. Villa Ave<br/>Villa Park, IL 60181</a></p>
          </div>
          <div className="phone contact-column">
            <img src="img/phone.png" alt="phone icon" />
            <p>
              You can call us here: <a href="tel:630-833-6777">(630) 833-6777</a>
            </p>
          </div>
          <div className="email contact-column">
            <img src="img/email.png" alt="email icon" />
            <form method="post" action="mailto:dwinslow123@me.com">
              <p>Or just send us an email!</p>
              <input
                type="submit"
                placeholder="Let us know!"
                value="Send Email"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactPage;