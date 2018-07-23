import React, { Component } from 'react';
import '../css/styles.css';

import { Jumbotron } from 'reactstrap';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Jumbotron className="main-jumbo">
          <h4 className="display-3">Villa Originals</h4>
          <p className="lead">Villa Originals is an independently owned and operated hair salon that has been making the people of the western suburbs beautiful sinces the early 1960's.
            We are a fun loving group of experienced hairstylists that really love what we do and can create the look that you want.</p>
            <hr className="my-2" />
            <p className="lead">Our customers are like family to us, and we enjoy listening to them and giving them quality service and style.
            It's the type of salon and friendly atmosphere <span className="cheers">"Where everybody knows your name"</span> and we look forward to meeting you!</p>
        </Jumbotron>
      </div>
    );
  }
}

export default MainPage;