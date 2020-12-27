import React from 'react';
import AnimatedBlock from '../block/AnimatedBlock';
import './styles.css';
import { translateXOfVisualizer } from './AnimationScreenUtil';

/**
 * Animation screen which shows the Insertion, Bubble, Selection, Shell Sort algorithm.
 *
 * @component
 * @category AnimationScreen
 * @param {Object[]} transitions An array which contains the animated blocks.
 * @param {number} dataSize The number of blocks.
 * @returns {JSX.Element} Generic sort screen component.
 */
const GenericSortScreen = ({ transitions, dataSize }) => {
  return (
    <div
      className="list"
      style={{
        transform: `translateX(-${translateXOfVisualizer(dataSize)}px)`,
      }}
    >
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
