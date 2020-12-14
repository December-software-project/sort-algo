import React from 'react';
import '../block/styles.css';
import { animated } from 'react-spring';

const SmallBlock = ({ item, props: { x, ...rest }, length, index, width }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        height: item.height * 18,
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
