import React, { useContext, useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import SmallBlock from '../smallBlock/SmallBlock';
import { swap, resetArray } from '../../util/VisualizerUtil';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import Buckets from './Buckets';

const BucketAnimationScreen = () => {
  const { isPlay, isReplay, speed, arrayData, animationArr, setIsReplay, setIsPlay } = useContext(
    VisualizerStateContext
  );
  const [referenceArray, setReferenceArray] = useState(arrayData);
  const [idx, setIdx] = useState(0);
  const length = referenceArray.length;
  let xDirection = 0;

  useEffect(() => {
    /**
     * This is for replay, reset button or any changes to data size or algorithm.
     */
    if (!isReplay && !isPlay) {
      setReferenceArray(arrayData);
      setIdx(0);
    }
  }, [arrayData, isReplay]);

  /**
   * This is the loop animation and ending of animation screen.
   * If block is to do the loop animation.
   * Else Block is to change the state into replay.
   */
  useEffect(() => {
    if (!isReplay && isPlay && idx < animationArr.length) {
      executeSwapAnimation();
    } else if (!isReplay && isPlay) {
      resetDataWhenAnimationFinish();
    }
  }, [isPlay, idx]);

  const executeSwapAnimation = () =>
    setTimeout(() => {
      let temp = animationArr[idx];
      setReferenceArray(swap(temp[0], temp[1], referenceArray));
      setIdx(idx + 1);
    }, 800 / speed);

  const resetDataWhenAnimationFinish = () => {
    setIsPlay(!isPlay);
    setIsReplay(true);
    resetArray(arrayData);
    setIdx(0);
  };

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
    <div className="containerOne">
      <div className="list">
        {transitions.map(({ item, props: { x, ...rest } }, index) => {
          return (
            <SmallBlock
              item={item}
              props={{ x, ...rest }}
              index={index}
              length={length}
              key={index}
            />
          );
        })}
      </div>
      <Buckets />
    </div>
  );
};

export default BucketAnimationScreen;
