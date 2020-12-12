import React from 'react';
import './styles.css';

const ResetButton = ({ onClick, isPlay }) => {
  return (
    <div className="reset-box" style={{ cursor: isPlay ? '' : 'pointer' }}>
      <span
        onClick={() => {
          if (!isPlay) {
            onClick();
          }
        }}
      >
        Reset
      </span>
    </div>
  );
};

export default ResetButton;
