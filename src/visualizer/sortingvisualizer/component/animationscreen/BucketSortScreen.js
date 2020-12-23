import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import { animated, useTransition } from 'react-spring';

const BucketSortScreen = () => {
  const { referenceArray, stackArr, dataSize } = useContext(VisualizerStateContext);

  const HorizontalBoxes = ({ dataSize, referenceArray }) => {
    const SingleBox = ({ item }) => (
      <div
        className="box"
        style={{
          visibility: item.isShown ? `visible` : `hidden`,
        }}
      >
        <div className="number">{item.height}</div>
      </div>
    );

    return (
      <div className="data-arr" style={{ gridTemplateColumns: `repeat(${dataSize}, 1fr)` }}>
        {referenceArray.map((x) => (
          <SingleBox item={x} key={x.id} />
        ))}
      </div>
    );
  };

  const AnimatedBox = ({ item, props: { y, ...rest }, index, length }) => (
    <animated.div
      className="box"
      style={{
        ...rest,
        zIndex: length - index,
        height: 35,
        transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );

  const Transitions = (stack) => {
    let yDirection = 0;
    return useTransition(
      stack.map((data) => {
        return { ...data, y: (yDirection -= 10) + 10 };
      }),
      (d) => d.id,
      {
        from: { height: 0, opacity: 1 },
        leave: { height: 0, opacity: 1 },
        enter: ({ y, height }) => ({ y, height, opacity: 1 }),
        update: ({ y, height }) => ({ y, height }),
      }
    );
  };

  const StackOfBoxes = ({ individualStack }) => {
    return (
      <div className="stack">
        <div className="stack-boxes">
          {Transitions(individualStack.array).map(({ item, props: { y, ...rest } }, index) => (
            <AnimatedBox item={item} props={{ y, ...rest }} index={index} key={index} />
          ))}
        </div>
        <div className="number-with-line">{individualStack.value}</div>
      </div>
    );
  };

  return (
    <div className="spaced-out-container">
      <HorizontalBoxes dataSize={dataSize} referenceArray={referenceArray} />
      <div className="stack-arr">
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} key={x.value} />
        ))}
      </div>
    </div>
  );
};

export default BucketSortScreen;
