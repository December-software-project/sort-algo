import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

/**
 * A block which animates to show the sorting animation.
 *
 * @param item {object} The information of the block.
 * @param x {number} The displacement of the block.
 * @param rest {object} All other information of the props.
 * @param length {number} The number of blocks.
 * @param index {number} Index of the block.
 * @param isSwap {boolean} A boolean value denoting whether this block is in a swap animation.
 * @param width {number} Width of the block.
 * @returns {JSX.Element} An animated block which translate in the X-Direction.
 */
const AnimatedBlock = ({ item, props: { x, ...rest }, length, index, isSwap, width }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        height: item.height * 10,
        width: width,
        zIndex: length - index,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
        backgroundImage: isSwap
          ? `linear-gradient(45deg, #13B1B7, #11C2C9)`
          : `linear-gradient(45deg, #287ED0, #5466FF)`,
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );
};

export default AnimatedBlock;
