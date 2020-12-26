import React from 'react';

/**
 * Horizontal array representation of the entire array.
 *
 * @component
 * @category MultipleBlocks
 * @param referenceArray Current state of the data array.
 * @param OvalType Used to represent each item in the data array.
 * @returns {JSX.Element} Horizontal array component.
 */
const HorizontalArray = ({ referenceArray, OvalType }) => {
  return (
    <div className="horiz-arr">
      {referenceArray.map((x, index) => (
        <OvalType item={x} key={index} />
      ))}
    </div>
  );
};

export default HorizontalArray;
