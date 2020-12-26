import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

/**
 * A counting sort block which animates to show the sorting animation.
 *
 * @component
 * @category Block
 * @param {object} item The information of the block.
 * @param {object} x The displacement of the block.
 * @param {object} rest All other information of the props.
 * @param {number} length The number of blocks.
 * @param {number} index Index of the block.
 * @param {number} width Width of the block.
 * @returns {JSX.Element} An animated block which translates in the x direction.
 */
const CountingSortBlock = ({ item, props: { x, ...rest }, length, index, width }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        backgroundImage: `linear-gradient(45deg, #287ED0, #5466FF)`,
        height: item.height * 10 + 9,
        width: width,
        zIndex: length - index,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
        visibility: item.isShown ? `visible` : `hidden`,
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );
};

export default CountingSortBlock;
