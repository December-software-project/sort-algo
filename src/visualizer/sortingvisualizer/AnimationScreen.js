import React, { useEffect, useRef, useState } from 'react';
import { useTransition } from 'react-spring';
import AnimatedBlock from '../component/block/AnimatedBlock';
import './styles.css';

const AnimationScreen = ({ dataArray, animationArr, swap, isPlay, setIsPlay }) => {
  const referenceArray = useRef(dataArray);
  const [idx, setIdx] = useState(0);
  const length = referenceArray.length;
  useEffect(() => {
    if (isPlay && idx < animationArr.length) {
      setTimeout(() => {
        let temp = animationArr[idx];
        referenceArray.current = swap(temp[0], temp[1], referenceArray.current);
        setIdx(idx + 1);
      }, 1000);
    } else if (isPlay) {
      setIsPlay();
    }
  }, [isPlay, idx]);

  let xDirection = 0;
  const transitions = useTransition(
    referenceArray.current.map((data) => ({ ...data, x: (xDirection += 10) - 10 })),
    (d) => d.id,
    {
      from: { height: 0, opacity: 1 },
      leave: { height: 0, opacity: 1 },
      enter: ({ x, height }) => ({ x, height, opacity: 1 }),
      update: ({ x, height }) => ({ x, height }),
      config: { mass: 5, tension: 500, friction: 100 },
    }
  );

  return (
    <div className="list">
      {transitions.map(({ item, props: { x, ...rest } }, index) => {
        return (
          <AnimatedBlock
            item={item}
            props={{ x, ...rest }}
            index={index}
            length={length}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default AnimationScreen;
