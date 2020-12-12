import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlinePause } from 'react-icons/ai';
import './styles.css';

const PauseButton = () => {
  return (
    <IconContext.Provider value={{ className: 'button' }}>
      <AiOutlinePause />
    </IconContext.Provider>
  );
};

export default PauseButton;
