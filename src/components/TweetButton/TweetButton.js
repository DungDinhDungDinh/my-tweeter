import React from 'react';
import { Button } from 'react-bootstrap';

import Styles from './TweetButton.scss';

class TweetButton extends React.PureComponent {
  render() {
    return (
      <Button
        bsStyle="primary"
        className={Styles.tweetButtonStyle}
        onClick={this.props.onClick}
      >
        Tweet
      </Button>
    );
  }
}

export default TweetButton;