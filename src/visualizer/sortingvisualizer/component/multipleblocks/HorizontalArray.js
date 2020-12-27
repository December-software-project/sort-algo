import React from 'react';

/**
 * Horizontal array representation of the entire array.
 *
 * @component
 * @category MultipleBlocks
 * @param referenceArray Current state of the data array.
 * @param BlockType Used to represent each item in the data array.
 * @returns {JSX.Element} Horizontal array component.
 */
const HorizontalArray = ({ referenceArray, BlockType }) => {
  return (
    <div className="horiz-arr">
      {referenceArray.map((x) => (
        <BlockType item={x} key={x.id} />
      ))}
    </div>
  );
};

export default HorizontalArray;
