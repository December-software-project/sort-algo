import React from 'react';
import CountingSortBlock from '../block/CountingSortBlock';
import CountBuckets from '../block/CountBuckets';
import './styles.css';

/**
 * Counting sort screen which encapsulates the fields and components of the animation.
 *
 * @component
 * @category AnimationScreen
 * @param {Object[]} transitions An array which contains the animated blocks.
 * @param {number} dataSize The number of blocks to show.
 * @returns {JSX.Element} Counting sort screen component.
 */
const CountingSortScreen = ({ transitions, dataSize }) => {
  return (
    <div className="container-one">
      <div className="list">
        {transitions.map(({ item, props: { x, ...rest } }, index) => {
          return (
            <CountingSortBlock
              item={item}
              props={{ x, ...rest }}
              index={index}
              length={dataSize}
              key={index}
              width={800 / dataSize}
            />
          );
        })}
      </div>
      <CountBuckets />
    </div>
  );
};

export default CountingSortScreen;
