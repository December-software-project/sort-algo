import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillCaretRight } from 'react-icons/ai';
import './styles.css';

const PlayButton = () => {
  return (
    <IconContext.Provider
      value={{
        className: 'button',
        style: { transform: `translateX(3px)` },
      }}
    >
      <AiFillCaretRight />
    </IconContext.Provider>
  );
};

export default PlayButton;
