import React, { Component } from 'react';

import { Jumbotron, Container } from 'reactstrap';
import '../css/styles.css';

class ServicesPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3 text-center">Services</h1>
          </Container>
        </Jumbotron>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Haircut with blowdry - ($22 - $24)</li>
            <li className="list-group-item">Haircut with blowdry and curl - $42</li>
            <li className="list-group-item">Kid's cut - $12</li>
            <li className="list-group-item">Kid's cut with blowdry and curl - $20</li>
            <li className="list-group-item">Roller Set - $18</li>
            <li className="list-group-item">Color* - $45 and up</li>
            <li className="list-group-item">Bleach* $60 and up</li>
            <li className="list-group-item">Highlights (foil or cap)* - $45 and up</li>
            <li className="list-group-item">Perms - $70 and up</li>
            <li className="list-group-item">Updo's and Formals - $40 and up</li>
            <li className="list-group-item">Facial Waxing - $10 and up</li>
            <li>* cut not included</li>
          </ul>
      </div>
    );
  }
}

export default ServicesPage;