import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import '../css/styles.css';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Navigation />
        <div className="main-title">
          <h2>Villa Originals</h2>
        </div>
        <div className="center-text">
          <p className="tagline">Villa Originals is an independently owned and operated hair salon that has been making the people of the western suburbs beautiful sinces the early 1960's.</p>
        </div>
        <div className="side-by-side">
          <div className="side-by-side-image"><img src="img/scissors1.jpg" alt="Scissors"/></div>
          <div className="side-by-side-text">
            <p>We are a fun loving group of experienced hairstylists that really love what we do and can create the look that you want.</p>
            <p>Our customers are like family to us, and we enjoy listening to them and giving them quality service and style.</p>
            <p>It's the type of salon and friendly atmosphere <span className="cheers">"Where everybody knows your name"</span> and we look forward to meeting you!</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;