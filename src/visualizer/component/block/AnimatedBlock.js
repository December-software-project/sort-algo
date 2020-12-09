import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

const AnimatedBlock = ({ item, props: { x, ...rest }, length, index }) => {
  return <animated.div
    className='animated-block' style={{
    height: item.height,
    zIndex: length - index,
    transform: x.interpolate(x => `translate3d(${x}px,0,0)`), ...rest,
  }}><span>{item.height}</span></animated.div>;
};

export default AnimatedBlock;
