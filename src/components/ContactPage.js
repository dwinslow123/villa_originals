import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Jumbotron } from 'reactstrap';

import '../css/styles.css';

class ContactPage extends Component {

  mapSelector = () => {
    if ((navigator.platform.indexOf("iPhone") !== -1) ||
        (navigator.platform.indexOf("iPad") !== -1) ||
        (navigator.platform.indexOf("iPod") !== -1)) {
      window.open("maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705");
        }
  }

  render() {
    return (
      <div className="contact-main">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-4 text-center">Contact</h1>
            </Container>
          </Jumbotron>
          <Row className="contact">
            <Col sm="3" className="contact-column">
              <img src="/img/map-marker.svg" alt="map-icon" />
              <p className="lead text-center">
                We are located at:<address><a href="https://goo.gl/maps/9iYz4N7VCus" onClick={ this.mapSelector }>26 S. Villa Ave<br/>Villa Park, IL 60181</a></address>
              </p>
            </Col>
            <Col sm="3" className="contact-column">
              <img src="/img/phone.svg" alt="phone-icon" />
              <p className="lead text-center">
                You can call us here:<br/><a href="tel:630-833-6777">(630) 833-6777</a>
              </p>
            </Col>
            <Col sm="3" className="contact-column text-center">
            <img src="/img/envelope-closed.svg" alt="email-icon" />
              <form method="post" action="mailto:dwinslow123@me.com">
                <p className="lead text-center">Or just send us an email!</p>
                <Button
                  type="submit"
                  value="Send Email"
                  color="info"
                >
                  Let us know!
                </Button>
              </form>
            </Col>
          </Row>
      </div>
    )
  }
}

export default ContactPage;