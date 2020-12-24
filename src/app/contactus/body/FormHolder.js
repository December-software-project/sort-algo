import React from 'react';
import IsVisible from 'react-is-visible';

/**
 * A wrapper component which helps to animate the form component upwards.
 *
 * @param props {JSX.Element} form component
 * @returns {JSX.Element} A wrapped form component which animate upwards.
 */
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
