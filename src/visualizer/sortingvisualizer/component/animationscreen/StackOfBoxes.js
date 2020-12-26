import React from 'react';
import { useTransition } from 'react-spring';
import BucketSortBlock from '../block/BucketSortBlock';

/**
 * Animated stack of boxes used for bucket sort.
 *
 * @component
 * @category BucketSort
 * @param individualStack Individual bucket in the stack.
 * @param value Index of the stack.
 * @returns {JSX.Element} Stack of boxes component.
 */
const StackOfBoxes = ({ individualStack, value }) => {
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
        {transition.map(({ item, props: { y, ...rest } }) => (
          <BucketSortBlock item={item} props={{ y, ...rest }} key={item.height} />
        ))}
      </div>
      <div className="number-with-line">{value}</div>
    </div>
  );
};

export default StackOfBoxes;
