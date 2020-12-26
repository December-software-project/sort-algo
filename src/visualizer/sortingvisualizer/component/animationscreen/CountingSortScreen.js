import React from 'react';
import SmallBlock from '../smallBlock/SmallBlock';
import Buckets from '../countingsortbuckets/Buckets';
import './styles.css';

/**
 * Animation screen which shows the counting sort algorithm.
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
