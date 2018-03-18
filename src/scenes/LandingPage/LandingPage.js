import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import splitTweet from '../../utils/splitTweet';
import Tweet from './components/Tweet';
import TweetButton from '../../components/TweetButton';
import AddTweetModal from '../../scenes/AddTweetModal';
import TweetIcon from './tweet-icon.png';
import Styles from './LandingPage.scss';

const TWEET_LENGTH = 50;
const END_CHARS = '!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/? ';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTweetModal: false,
      allTweets: [],
    }
    this.tweetInput = null;
  }

  showTweetModal = () => {
    this.setState({ isShowTweetModal: true });
  }

  closeTweetModal = () => {
    this.setState({ isShowTweetModal: false });
  }

  addTweet = () => {
    const tweetStr = this.tweetInput.value;
    const newTweets = splitTweet(tweetStr);
    this.setState({ allTweets: [...this.state.allTweets, ...newTweets] });
    this.closeTweetModal();
  }

  render() {
    return (
      <Grid>
        <Row className={Styles.header}>
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

          <Col className={Styles.tweetLogo}>
            <img src={TweetIcon} />
          </Col>

          <Col className={Styles.rightHeader}>
            <TweetButton onClick={this.showTweetModal}/>
          </Col>
        </Row>

        <Row className="cover-session">
        </Row>

        <Row className="content-session">
          <AddTweetModal
            isOpen={this.state.isShowTweetModal}
            addTweet={this.addTweet}
            closeTweetModal={this.closeTweetModal}
            tweetInputRef={el => this.tweetInput = el}
          />
        </Row>

        <div>
          {
            this.state.allTweets.map((tweet) => {
              return (
                <Tweet tweet={tweet}/>
              )
            })
          }
        </div>
      </Grid>
    );
  }
}

export default LandingPage;