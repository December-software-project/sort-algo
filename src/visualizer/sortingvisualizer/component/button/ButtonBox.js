import BackButton from './forwardbackbutton/BackButton';
import ThreeStateButton from './threestatebutton/ThreeStateButton';
import NewDataButton from './newdatabutton/NewDataButton';
import ForwardButton from './forwardbackbutton/ForwardButton';
import React from 'react';
import './styles.css';

/**
 * A component which holds forward and backward button, as well as the play, pause and replay button.
 */
const ButtonBox = () => (
  <div className="button-box">
    <BackButton />
    <div className="play-reset-button-box">
      <ThreeStateButton />
      <NewDataButton />
    </div>
    <ForwardButton />
  </div>
);

export default ButtonBox;
