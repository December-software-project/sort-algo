import React from 'react';
import { animated } from 'react-spring';
import { spreadNumber } from './HighlightUtil';
import './styles.css';

/**
 * A counting sort block which animates to show the sorting animation.
 *
 * @component
 * @category Block
 * @param {object} item. The information of the block.
 * @param {object} x. The displacement of the block.
 * @param {object} rest. All other information of the props.
 * @param {number} index. Index of the block.
 * @returns {JSX.Element} An animated block which translates in the y direction.
 */
const BucketSortBlock = ({ item, props: { y, ...rest }, index }) => {
  return (
    <animated.div
      className="oval"
      key={index}
      index={index}
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
