import React from 'react';
import AnimatedBlock from '../block/AnimatedBlock';
import './styles.css';

/**
 * Animation screen which shows the Insertion, Bubble, Selection, Shell Sort algorithm.
 *
 * @param transitions {object[]} An array which contains the animated blocks.
 * @param dataSize {number} The number of blocks.
 */
const GenericSortScreen = ({ transitions, dataSize }) => {
  return (
    <div className="list">
      {transitions.map(({ item, props: { x, ...rest } }, index) => {
        return (
          <AnimatedBlock
            item={item}
            props={{ x, ...rest }}
            index={index}
            length={dataSize}
            key={index}
            isSwap={item.isSwap}
            width={800 / dataSize}
          />
        );
      })}
    </div>
  );
};

export default GenericSortScreen;
