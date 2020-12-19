import React from 'react';
import IsVisible from 'react-is-visible';

const FormHolder = (props) => {
  const transitionStyling = (isVisible) => ({
    transform: isVisible ? `translateY(0px)` : `translateY(100px)`,
    transition: `all 1.0s ease-in-out`,
  });

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className={props.classNameToUse} style={transitionStyling(isVisible)}>
          {props.children}
        </div>
      )}
    </IsVisible>
  );
};

export default FormHolder;
