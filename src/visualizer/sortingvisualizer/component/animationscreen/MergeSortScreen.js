import React from 'react';
import MergeSortBlock from '../block/MergeSortBlock';
import './styles.css';
import { translateXOfVisualizer } from './AnimationScreenUtil';

/**
 * Animation screen which shows the Merge Sort algorithm.
 *
 * @component
 * @category AnimationScreen
 * @param {Object[]} transitions An array which contains the animated blocks.
 * @param {number} dataSize The number of blocks.
 * @returns {JSX.Element} Merge sort screen component.
 */
const MergeSortScreen = ({ transitions, dataSize }) => {
  return (
    <div className="container-one">
      <div
        className="list"
        style={{
          transform: `translateX(-${translateXOfVisualizer(dataSize)}px)`,
        }}
      >
        {transitions.map(({ item, props: { x, ...rest } }, index) => {
          return (
            <MergeSortBlock
              item={item}
              props={{ x, ...rest }}
              index={index}
              length={dataSize}
              key={index}
              isShift={item.isShift}
              width={800 / dataSize}
              pos={item.pos}
              prevPos={item.prevPos}
            />
          );
        })}
      </div>
      <div className="empty-space-for-merge-sort" />
    </div>
  );
};

export default MergeSortScreen;
