import React from 'react';
import '../block/styles.css';
import { animated } from 'react-spring';

const SmallBlock = ({ item, props: { x, ...rest }, length, index }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        height: item.height * 22,
        zIndex: length - index,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );
};

export default SmallBlock;
