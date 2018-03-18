import React from 'react';

import Avatar from '../../../components/Avatar';
import Styles from './Tweet.scss';

class Tweet extends React.PureComponent {
  render() {
    const { tweet } = this.props;

    return (
      <div className={Styles.tweet}>
        <Avatar />
        <div className={Styles.tweetContent}>
          <p className={Styles.userName}>Dinh Thi Thuy Dung</p>
          <span>{tweet}</span>
        </div>
      </div>
    );
  }
}

export default Tweet;