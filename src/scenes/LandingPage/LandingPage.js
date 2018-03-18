import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import Styles from './LandingPage.scss';
import TweetButton from '../../components/TweetButton';
import AddTweetModal from '../../scenes/AddTweetModal';

const TWEET_LENGTH = 50;
const END_CHARS = '!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/? ';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTweetModal: false,
      allTweets: ['This is my first tweet.'],
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
    if (tweetStr.length <= TWEET_LENGTH) {
      this.setState({
        allTweets: [...this.state.allTweets, tweetStr]
      });
    } else {
      let totalTweet = Math.ceil(tweetStr.length / TWEET_LENGTH);
      let tweetArr = [];
      this.splitTweet(tweetStr, tweetArr, totalTweet, 1);

      let redundantTweetsLength = 0;
      while((redundantTweetsLength = this.redundantTweetsLength(tweetArr, totalTweet)) > 0) {
        console.log(redundantTweetsLength);
        totalTweet += Math.ceil(redundantTweetsLength / TWEET_LENGTH);
        tweetArr = [];
        this.splitTweet(tweetStr, tweetArr, totalTweet, 1);
      }
      
      this.setState({
        allTweets: this.state.allTweets.concat(tweetArr)
      });
    }
    this.closeTweetModal();
  }

  splitTweet = (tweetStr, tweetArr, totalTweet, tweetIndex) => {
    const indexingLength = totalTweet.toString().length + tweetIndex.toString().length + 2;
    if (tweetStr.length + indexingLength > TWEET_LENGTH) {
      const maxEndPoint = TWEET_LENGTH - indexingLength;
      if (END_CHARS.indexOf(tweetStr.charAt(maxEndPoint - 1)) !== -1) {
        tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, maxEndPoint)}`.trim());
        this.splitTweet(tweetStr.substring(maxEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
      } else {
        const spaceCharEndPoint = tweetStr.substring(0, maxEndPoint).lastIndexOf(' ');
        tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, spaceCharEndPoint)}`.trim());
        this.splitTweet(tweetStr.substring(spaceCharEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
      }
    } else {
      tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr}`.trim());
    } 
  }

  redundantTweetsLength = (tweetArr, totalTweet) => {
    const lastTweet = tweetArr[tweetArr.length - 1];
    let lastTweetIndex = parseInt(lastTweet.substring(0, lastTweet.indexOf('/')));
    if (lastTweetIndex === totalTweet) {
      return 0;
    }
    let redundantTweetsLength = 0;
    while (lastTweetIndex > totalTweet) {
      redundantTweetsLength += tweetArr[lastTweetIndex - 1].length;
      lastTweetIndex--;
    }
    return redundantTweetsLength;
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
          {this.state.isShowTweetModal && <AddTweetModal
            addTweet={this.addTweet}
            closeTweetModal={this.closeTweetModal}
            tweetInputRef={el => this.tweetInput = el}
          />}
        </Row>

        <div>
          {
            this.state.allTweets.map((tweet) => {
              return (
                <div>
                  <span>{tweet}###</span>
                  <span>Length: {tweet.length}</span>
                </div>
              )
            })
          }
        </div>
      </Grid>
    );
  }
}

export default LandingPage;