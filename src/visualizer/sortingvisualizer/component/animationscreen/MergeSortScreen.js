import React from 'react';
import MergeSortBlock from '../block/MergeSortBlock';
import './styles.css';

const MergeSortScreen = ({ transitions, length, dataSize }) => {
  return (
    <div className="container-one">
      <div className="list">
        {transitions.map(({ item, props: { x, ...rest } }, index) => {
          return (
            <MergeSortBlock
              item={item}
              props={{ x, ...rest }}
              index={index}
              length={length}
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
