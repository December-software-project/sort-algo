import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

const MergeSortBlock = ({ item, props: { x, ...rest }, length, index, isShift, width }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        height: item.height * 10 + 9,
        width: width,
        zIndex: length - index,
        transform: isShift
          ? x.interpolate((x) => `translate3d(${x}px, 150px,0)`)
          : x.interpolate((x) => `translate3d(${x}px,0,0)`),
        backgroundImage: isShift
          ? `linear-gradient(45deg, #13B1B7, #11C2C9)`
          : `linear-gradient(45deg, #287ED0, #5466FF)`,
        pos: item.pos,
        prevPos: item.prevPos,
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );
};

export default MergeSortBlock;
