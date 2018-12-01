import React from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

dom.watch();
library.add(faFacebook, faInstagram);

export const Footer = () => {
  return (
    <Navbar color="dark" className="footer">
      <Nav>
      <NavItem>
      <a className="social-logo" href="https://facebook.com/villa_originals">
        <FontAwesomeIcon
          icon={['fab', 'facebook']}
          size="3x"
          inverse
        />
      </a>
      </NavItem>
      <NavItem>
      <a className="social-logo" href="https://instagram.com/villa_originals">
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          size="3x"
          inverse
        />
      </a>
      </NavItem>
      </Nav>
    </Navbar>
  );
};