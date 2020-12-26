import React from 'react';

/**
 * Horizontal array representation of the entire array.
 *
 * @component
 * @category BucketSort
 * @param dataSize Data size of the array.
 * @param referenceArray Current state of the data array.
 * @param SingleOval Used to represent each item in the data array.
 * @returns {JSX.Element} Horizontal array component.
 */
const HorizontalArray = ({ dataSize, referenceArray, SingleOval }) => {
  return (
    <div className="data-arr" style={{ gridTemplateColumns: `repeat(${dataSize}, 1fr)` }}>
      {referenceArray.map((x, index) => (
        <SingleOval item={x} key={index} />
      ))}
    </div>
  );
};

export default HorizontalArray;
