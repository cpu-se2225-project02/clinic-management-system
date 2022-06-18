/* eslint-disable linebreak-style */
import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <Row className="ft-des">
      <div className="copyright" data-testid="footer">
        All rights reserved 2022
      </div>
    </Row>
  );
}
