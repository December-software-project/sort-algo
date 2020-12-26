import React from 'react';
import SmallBlock from '../smallBlock/SmallBlock';
import Buckets from '../countingsortbuckets/Buckets';
import './styles.css';

/**
 * Animation screen which shows the Counting Sort algorithm.
 *
 * @component
 * @category AnimationScreen
 * @param {Object[]} transitions An array which contains the animated blocks.
 * @param {number} dataSize The number of blocks.
 */
const CountingSortScreen = ({ transitions, dataSize }) => {
  return (
    <div className="container-one">
      <div className="list">
        {transitions.map(({ item, props: { x, ...rest } }, index) => {
          return (
            <SmallBlock
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
      <Buckets />
    </div>
  );
};

export default CountingSortScreen;
