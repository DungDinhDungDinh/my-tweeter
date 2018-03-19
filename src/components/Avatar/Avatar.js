import React from 'react';

import avatar from './avatar.png';
import Styles from './Avatar.scss';

class Avatar extends React.PureComponent {
  render() {
    return (
      <img src={avatar} className={Styles.avatar} alt=""/>
    );
  }
}

export default Avatar;