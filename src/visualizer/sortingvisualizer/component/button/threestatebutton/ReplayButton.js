import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineReload } from 'react-icons/ai';

const ReplayButton = () => {
  return (
    <IconContext.Provider value={{ className: 'button' }}>
      <AiOutlineReload />
    </IconContext.Provider>
  );
};

export default ReplayButton;
