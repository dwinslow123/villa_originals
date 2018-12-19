import React, { Component } from 'react';

import {
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
        <Container className="services">
          <h1 className="text-center">Service Menu</h1>
          <Row className="services-list">
            <Col lg="8">
            <ListGroup className="text-center">
              <ListGroupItem>Haircut with blowdry - ($22 - $24)</ListGroupItem>
              <ListGroupItem>Haircut with blowdry and curl - $42</ListGroupItem>
              <ListGroupItem>Kid's cut - $12</ListGroupItem>
              <ListGroupItem>Kid's cut with blowdry and curl - $20</ListGroupItem>
              <ListGroupItem>Roller Set - $18</ListGroupItem>
              <ListGroupItem>Color* - $45</ListGroupItem>
              <ListGroupItem>Bleach* $60</ListGroupItem>
              <ListGroupItem>Highlights (foil or cap)* - $45</ListGroupItem>
              <ListGroupItem>Perms - $70</ListGroupItem>
              <ListGroupItem>Updo's and Formals - $40</ListGroupItem>
              <ListGroupItem>Facial Waxing - $10</ListGroupItem>
              <ListGroupItem>And much more!</ListGroupItem>
            </ListGroup>
            </Col>
          </Row>
          <p>* cut not included. All prices are starting points.</p>
        </Container>
      </div>
    );
  }
}

export default ServicesPage;