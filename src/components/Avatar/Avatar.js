import React from 'react';

import avatar from './avatar.png';
import Styles from './Avatar.scss';

class Avatar extends React.PureComponent {
  render() {
    const { tweet } = this.props;

    return (
      <img src={avatar} className={Styles.avatar}/>
    );
  }
}

export default Avatar;