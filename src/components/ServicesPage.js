import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

class ServicesPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Navigation />
        <div className="services-main"><h2>Se<span className="services-span">rv</span>ices</h2></div>
        <div className="services">
          <div className="column-1">
            <ul>
              <li>Haircut with blowdry - ($22 - $24)</li>
              <li>Haircut with blowdry and curl - $42</li>
              <li>Kid's cut - $12</li>
              <li>Kid's cut with blowdry and curl - $20</li>
              <li>Roller Set - $18</li>
              <li>Color* - $45 and up</li>
            </ul>
          </div>
          <div className="column-2">
            <ul>
              <li>Bleach* $60 and up</li>
              <li>Highlights (foil or cap)* - $45 and up</li>
              <li>Perms - $70 and up</li>
              <li>Updo's and Formals - $40 and up</li>
              <li>Facial Waxing - $10 and up</li>
              <li id="disclaimer">* cut not included</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;