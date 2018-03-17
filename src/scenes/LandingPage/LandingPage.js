import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import Styles from './LandingPage.scss';
import TweetButton from '../../components/TweetButton';
import AddTweetModal from '../../scenes/AddTweetModal';

class LandingPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowTweetModal: false,
    }
  }

  showTweetModal = () => {
    this.setState({ isShowTweetModal: true });
  }

  render() {
    return (
      <Grid>
        <Row className={Styles.headerSession}>
          <Col className="left-column">
            <div>
              <div className={Styles.tab}>
                <a href="" title="Home">
                  <Glyphicon glyph="glyphicon glyphicon-home" />
                  Home
                </a>
              </div>
              <div className={Styles.tab} >
                <a href="" title="Home">
                  <Glyphicon glyph="glyphicon glyphicon-bell" />
                  Notifications
                </a>
              </div>
              <div className={Styles.tab}>
                <a href="" title="Home" >
                  <Glyphicon glyph="glyphicon glyphicon-envelope" />
                  Messages
                </a>
              </div>
            </div>
          </Col>

          <Col className="logo">
          </Col>

          <Col className="right-column">
            <TweetButton onClick={this.showTweetModal}/>
          </Col>
        </Row>

        <Row className="cover-session">
        </Row>

        <Row className="content-session">
          {this.state.isShowTweetModal && <AddTweetModal />}
        </Row>
      </Grid>
    );
  }
}

export default LandingPage;