import React from 'react';

import './styles.css';
import 'intersection-observer';
import IsVisible from 'react-is-visible';

const Step = ({ img, title, description }) => {
  const HeaderLineStyling = (isVisible) => ({
    transform: isVisible ? `translateY(0px)` : `translateY(125px)`,
    transition: `all 1.0s ease-in-out`,
  });

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="step-container" style={HeaderLineStyling(isVisible)}>
          <img
            className="picture"
            // src={img}
          />
          <p className="step-title">{title}</p>
          <p className="step-description">{description}</p>
        </div>
      )}
    </IsVisible>
  );
};

export default Step;
