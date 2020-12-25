import React from 'react';
import { animated } from 'react-spring';
import { highlightOnesPlacing } from '../animationscreen/NumberHighlighter';

const BucketSortBlock = ({ item, props: { y, ...rest }, index }) => {
  return (
    <animated.div
      className="box"
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
      <div className="decimal">{highlightOnesPlacing(item.height)}</div>
    </animated.div>
  );
};

export default BucketSortBlock;
