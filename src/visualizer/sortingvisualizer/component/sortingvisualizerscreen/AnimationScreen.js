import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import AnimatedBlock from '../block/AnimatedBlock';
import { swap, resetArray } from '../../../../utils/VisualizerUtil';
import './styles.css';

const AnimationScreen = ({
  dataArray,
  animationArr,
  isPlay,
  setIsPlay,
  speed,
  setIsReplay,
  isReplay,
}) => {
  const [referenceArray, setReferenceArray] = useState(dataArray);
  const [idx, setIdx] = useState(0);
  const length = referenceArray.length;

  useEffect(() => {
    /**
     * This is for replay, reset button or any changes to data size or algorithm.
     */
    if (!isReplay && !isPlay) {
      setReferenceArray(dataArray);
      setIdx(0);
    }
  }, [dataArray, isReplay]);

  /**
   * This is the loop animation and ending of animation screen.
   * If block is to do the loop animation.
   * Else Block is to change the state into replay.
   */
  useEffect(() => {
    if (!isReplay && isPlay && idx < animationArr.length) {
      setTimeout(() => {
        let temp = animationArr[idx];
        setReferenceArray(swap(temp[0], temp[1], referenceArray));
        setIdx(idx + 1);
      }, 800 / speed);
    } else if (!isReplay && isPlay) {
      setIsPlay(!isPlay);
      setIsReplay();
      resetArray(dataArray);
      setIdx(0);
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
