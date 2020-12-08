import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

const AnimatedBlock = ({ item, props: { x, ...rest }, length, index }) => {
  return <animated.div
    className='temp' style={{
    height: item.height,
    backgroundImage: item.css,
    zIndex: length - index,
    transform: x.interpolate(x => `translate3d(${x}px,0,0)`), ...rest,
  }} />;
};

export default AnimatedBlock;
