import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import AnimatedBlock from '../component/block/AnimatedBlock';
import './styles.css';

const AnimationScreen = ({
  dataArray,
  animationArr,
  swap,
  isPlay,
  setIsPlay,
  resetArray,
  speed,
}) => {
  const [referenceArray, setReferenceArray] = useState(dataArray);
  const [idx, setIdx] = useState(0);
  const length = referenceArray.length;
  useEffect(() => {
    setReferenceArray(dataArray);
  }, [dataArray]);
  useEffect(() => {
    if (isPlay && idx < animationArr.length) {
      setTimeout(() => {
        let temp = animationArr[idx];
        setReferenceArray(swap(temp[0], temp[1], referenceArray));
        setIdx(idx + 1);
      }, 800 / speed);
    } else if (isPlay) {
      setIsPlay();
      resetArray(dataArray);
    }
  }, [isPlay, idx]);

  let xDirection = 0;
  const transitions = useTransition(
    referenceArray.map((data) => ({ ...data, x: (xDirection += 10) - 10 })),
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
            key={index}
            isSwap={item.isSwap}
          />
        );
      })}
    </div>
  );
};

export default AnimationScreen;
