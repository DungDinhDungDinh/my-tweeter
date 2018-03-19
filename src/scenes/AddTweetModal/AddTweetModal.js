import React from 'react';
import { Modal } from 'react-bootstrap';

import TweetButton from '../../components/TweetButton';

import Styles from './AddTweetModal.scss';

class AddTweetModal extends React.PureComponent {
  render() {
    const { isOpen, addTweet, closeTweetModal, tweetInputRef } = this.props;

    return (
      <div className="static-modal">
        <Modal
          show={isOpen}
          onHide={closeTweetModal}
        >
          <Modal.Header
            closeButton
            className={Styles.modalHeader}
          >
            <Modal.Title>Compose new Tweet</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea
              rows="6"
              ref={tweetInputRef}
              className={Styles.tweetInput}
            />
          </Modal.Body>

          <Modal.Footer>
            <TweetButton onClick={addTweet} bsStyle="primary" />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTweetModal;