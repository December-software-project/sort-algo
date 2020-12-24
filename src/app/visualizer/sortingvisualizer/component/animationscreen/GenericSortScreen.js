import React from 'react';
import AnimatedBlock from '../block/AnimatedBlock';

const GenericSortScreen = ({ transitions, length, dataSize }) => {
  return (
    <div className="list">
      {transitions.map(({ item, props: { x, ...rest } }, index) => {
        return (
          <AnimatedBlock
            item={item}
            props={{ x, ...rest }}
            index={index}
            length={length}
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
