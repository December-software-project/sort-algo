import React from 'react';
import IsVisible from 'react-is-visible';

/**
 * A wrapper component which helps to animate the component upwards.
 *
 * @param props Attribute to be passed into this component.
 */
const IsVisibleYDirection = (props) => {
  const transitionStyling = (isVisible) => ({
    transform: isVisible ? `translateY(0px)` : props.yValue,
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

export default IsVisibleYDirection;
