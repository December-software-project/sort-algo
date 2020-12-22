import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import './styles.css';
import { useTransition } from 'react-spring';
import HorizontalBoxes from '../radixsortboxes/HorizontalBoxes';

const BucketSortScreen = () => {
  const { referenceArray, stackArr, dataSize, idx } = useContext(VisualizerStateContext);
  let yDirection = 0;

  const AnimatedBox = ({ item, props: { y, ...rest }, index, length }) => (
    <animated.div
      className='box'
      style={{
        ...rest,
        zIndex: length - index,
        transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <div className='number'>{item.height}</div>
    </animated.div>
  );

  const transitions = (stack) => useTransition(
    stack.map((data) => {
      return { ...data, y: (yDirection += 5) - 5 };
    }),
    (d) => d.id,
    {
      from: { height: 0, opacity: 1 },
      leave: { height: 0, opacity: 1 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    },
  );

  const StackOfBoxes = ({ individualStack }) => (
    <div className='stack'>
      <div className='stack-boxes'>
        {transitions(individualStack.array).map(({ item, props: { y, ...rest } }, index) => (
          <AnimatedBox item={item} props: {{ y, ...rest }} index={index} length={length}
                       key={index} />
        ))}
      </div>
      <div className='number-with-line'>{individualStack.value}</div>
    </div>
  );

  return (
    <>
      <HorizontalBoxes dataSize={dataSize} referenceArray={referenceArray} />
      <div className='stack-arr'>
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} key={x.value} />
        ))}
      </div>
    </>
  );
};

export default BucketSortScreen;
