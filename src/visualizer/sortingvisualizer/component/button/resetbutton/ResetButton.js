import React from 'react';
import './styles.css';

const ResetButton = ({ onClick, isPlay, setIsReplay }) => {
  return (
    <div className="reset-box" style={{ cursor: isPlay ? '' : 'pointer' }}>
      <span
        onClick={() => {
          if (!isPlay) {
            onClick();
          }
          setIsReplay();
        }}
      >
        Reset
      </span>
    </div>
  );
};

export default ResetButton;
