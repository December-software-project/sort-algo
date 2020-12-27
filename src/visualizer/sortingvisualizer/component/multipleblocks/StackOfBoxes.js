import React from 'react';
import HighlightedOval from '../block/HighlightedOval';

/**
 * Stack of boxes of an item in the bucket for radix sort.
 *
 * @component
 * @category MultipleBlocks
 * @param {Object} individualStack A single stack in the buckets.
 * @returns {JSX.Element} Stack of boxes component.
 */
const StackOfBoxes = ({ individualStack }) => (
  <div className="stack">
    <div className="stack-boxes">
      {individualStack.array.map((x) => (
        <HighlightedOval item={x} key={x.id} display={true} marginTop={10} />
      ))}
    </div>
    <div className="number-with-line">{individualStack.value}</div>
  </div>
);

export default StackOfBoxes;
