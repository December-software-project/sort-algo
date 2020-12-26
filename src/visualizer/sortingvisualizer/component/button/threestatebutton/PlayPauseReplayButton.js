import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillCaretRight, AiOutlinePause, AiOutlineReload } from 'react-icons/ai';
import './styles.css';

/**
 * Depending on the {@code type}, it will show the relevant button state.
 *
 * @param {string} type The state of the button to be shown: 'play', 'pause', 'replay'.
 */
const PlayPauseReplayButton = ({ type }) => {
  return (
    <IconContext.Provider
      value={{
        className: 'three-state-button',
        style: { transform: type === 'play' ? 'translateX(3px)' : 'translateX(0px)' },
      }}
    >
      {type === 'play' ? (
        <AiFillCaretRight />
      ) : type === 'pause' ? (
        <AiOutlinePause />
      ) : (
        <AiOutlineReload />
      )}
    </IconContext.Provider>
  );
};

export default PlayPauseReplayButton;
