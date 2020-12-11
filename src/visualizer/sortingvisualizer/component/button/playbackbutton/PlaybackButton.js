import React from 'react';
import './styles.css';
import { IconContext } from 'react-icons';
import { AiFillCaretRight, AiOutlinePause } from 'react-icons/ai';

const PlayBackButton = ({ onClick, isPlay }) => {
  return (
    <button className="button-holder" onClick={onClick}>
      {isPlay ? (
        <IconContext.Provider value={{ className: ' button' }}>
          <AiOutlinePause />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            className: ' button',
            style: { transform: `translateX(3px)` },
          }}
        >
          <AiFillCaretRight />
        </IconContext.Provider>
      )}
    </button>
  );
};

export default PlayBackButton;
