import React from 'react';
import { animated } from 'react-spring';
import { spreadNumber } from './HighlightUtil';
import './styles.css';

/**
 * A bucket sort block which animates to show the sorting animation.
 *
 * @component
 * @category Block
 * @param {Object} item The information of the block.
 * @param {Object} x The displacement of the block.
 * @param {Object} rest All other information of the props.
 * @returns {JSX.Element} An animated block which translates in the y direction.
 */
const BucketSortBlock = ({ item, props: { y, ...rest } }) => {
  return (
    <animated.div
      className="oval"
      style={{
        ...rest,
        height: 40,
        backgroundImage: item.isSwap
          ? `linear-gradient(45deg, #13B1B7, #11C2C9)`
          : `linear-gradient(45deg, #287ED0, #5466FF)`,
        transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <div className="decimal">{spreadNumber(item.height)}</div>
    </animated.div>
  );
};

export default BucketSortBlock;
