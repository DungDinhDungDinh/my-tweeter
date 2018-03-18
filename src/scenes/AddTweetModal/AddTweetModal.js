import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import TweetButton from '../../components/TweetButton';

import Styles from './AddTweetModal.scss';

class AddTweetModal extends React.PureComponent {
  render() {
    const { addTweet, closeTweetModal, tweetInputRef } = this.props;

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input type="text" ref={tweetInputRef}/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={closeTweetModal}>Close</Button>
            <TweetButton onClick={addTweet} bsStyle="primary" />
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default AddTweetModal;