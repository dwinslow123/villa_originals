import React, { Component } from 'react';

import {
  Jumbotron,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem } from 'reactstrap';
import '../css/styles.css';

class ServicesPage extends Component {
  render() {
    return (
      <div className="services-main">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Services</h1>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col lg="6">
          <ListGroup className="text-center">
            <ListGroupItem>Haircut with blowdry - ($22 - $24)</ListGroupItem>
            <ListGroupItem>Haircut with blowdry and curl - $42</ListGroupItem>
            <ListGroupItem>Kid's cut - $12</ListGroupItem>
            <ListGroupItem>Kid's cut with blowdry and curl - $20</ListGroupItem>
            <ListGroupItem>Roller Set - $18</ListGroupItem>
            <ListGroupItem>Color* - $45 and up</ListGroupItem>
          </ListGroup>
          </Col>
          <Col lg="6">
          <ListGroup className="text-center">
            <ListGroupItem>Bleach* $60 and up</ListGroupItem>
            <ListGroupItem>Highlights (foil or cap)* - $45 and up</ListGroupItem>
            <ListGroupItem>Perms - $70 and up</ListGroupItem>
            <ListGroupItem>Updo's and Formals - $40 and up</ListGroupItem>
            <ListGroupItem>Facial Waxing - $10 and up</ListGroupItem>
            <ListGroupItem>And much more!</ListGroupItem>
          </ListGroup>
          </Col>
        </Row>
        <p>* cut not included</p>
      </Container>
      </div>
    );
  }
}

export default ServicesPage;