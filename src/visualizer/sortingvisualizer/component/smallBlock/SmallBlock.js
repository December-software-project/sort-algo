import React from 'react';
import '../block/styles.css';
import { animated } from 'react-spring';

export const heightMapping = {
  1: 19,
  2: 19,
  3: 19,
  4: 19,
  5: 19,
  6: 19,
  7: 19,
  8: 19,
  9: 19,
}

const SmallBlock = ({ item, props: { x, ...rest }, length, index, width }) => {
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

export default SmallBlock;
