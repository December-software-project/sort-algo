import React from 'react';
import './styles.css';

const ResetButton = ({ onClick, isPlay }) => {
  return (
    <div className="reset-box" style={{ cursor: isPlay ? '' : 'pointer' }}>
      <span onClick={() => onClick()}>Reset</span>
    </div>
  );
};

export default ResetButton;
