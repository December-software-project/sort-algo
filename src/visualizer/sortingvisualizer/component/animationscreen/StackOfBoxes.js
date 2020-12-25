import React from 'react';
import { useTransition } from 'react-spring';
import BucketSortBlock from '../block/BucketSortBlock';

const StackOfBoxes = ({ individualStack }) => {
  let yDirection = 0;
  const transition = useTransition(
    individualStack.map((data) => {
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

  return (
    <div className="stack">
      <div className="stack-boxes">
        {transition.map(({ item, props: { y, ...rest } }, index) => (
          <BucketSortBlock item={item} props={{ y, ...rest }} key={index} />
        ))}
      </div>
      <div className="number-with-line">{individualStack.value}</div>
    </div>
  );
};

export default StackOfBoxes;
