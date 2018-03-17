import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import * as Styles from './LandingPage.css';

class LandingPage extends React.PureComponent {
  render() {
    console.log('fffffff', Styles);
    return (
      <Grid>
        <Row className="headerSession">
          <Col className="left-column">
            <span>sadasdas</span>
          </Col>

          <Col className="logo">
          </Col>

          <Col className="right-column">
          </Col>
        </Row>

        <Row className="cover-session">
        </Row>

        <Row className="content-session">
        </Row>
      </Grid>
    );
  }
}

export default LandingPage;