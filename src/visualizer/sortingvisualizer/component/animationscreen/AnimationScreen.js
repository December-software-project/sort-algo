import React, { useContext, useEffect } from 'react';
import { useTransition } from 'react-spring';
import AnimatedBlock from '../block/AnimatedBlock';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import { arrayCopy, isBucketTypeSort } from '../../util/VisualizerUtil';
import SmallBlock from '../smallBlock/SmallBlock';
import Buckets from '../bucketsortingvisualizer/Buckets';
import MergeSortBlock from '../block/MergeSortBlock';

const AnimationScreen = () => {
  const {
    isPlay,
    isReplay,
    arrayData,
    animationArr,
    idx,
    referenceArray,
    speed,
    setIdx,
    setReferenceArray,
    executeForwardSwapAnimation,
    resetDataWhenAnimationFinish,
    dataSize,
    visualizerAlgorithm,
    isReset,
    setIsReset,
  } = useContext(VisualizerStateContext);

  const length = referenceArray.length;
  let xDirection = 0;

  useEffect(() => {
    /**
     * This is for replay, or any changes to arrayData
     */
    if (isReset) {
      setReferenceArray(arrayCopy(arrayData));
      setIdx(0);
      setIsReset(false);
    }
  }, [arrayData, isReplay]);

  /**
   * This is the loop animation and ending of animation screen.
   * If block is to do the loop animation.
   * Else Block is to change the state into replay.
   */
  useEffect(() => {
    if (!isReplay && isPlay && idx < animationArr.length) {
      setTimeout(() => {
        executeForwardSwapAnimation();
      }, 800 / speed);
    } else if (!isReplay && isPlay) {
      resetDataWhenAnimationFinish(referenceArray);
    }
  }, [isPlay, idx]);

  const transitions = useTransition(
    referenceArray.map((data) => {
      if (visualizerAlgorithm === 'Merge Sort') {
        return { ...data, x: parseInt(data.xDirection) };
      }
      return { ...data, x: (xDirection += 10) - 10 };
    }),
    (d) => d.id,
    {
      from: { height: 0, opacity: 1 },
      leave: { height: 0, opacity: 1 },
      enter: ({ x, height }) => ({ x, height, opacity: 1 }),
      update: ({ x, height }) => ({ x, height }),
    }
  );

  if (isBucketTypeSort(visualizerAlgorithm)) {
    return (
      <div className="container-one">
        <div className="list">
          {transitions.map(({ item, props: { x, ...rest } }, index) => {
            return (
              <SmallBlock
                item={item}
                props={{ x, ...rest }}
                index={index}
                length={length}
                key={index}
                width={800 / dataSize}
              />
            );
          })}
        </div>
        <Buckets />
      </div>
    );
  } else if (visualizerAlgorithm === 'Merge Sort') {
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
                isSwap={item.isSwap}
                isShift={item.isShift}
                width={800 / dataSize}
              />
            );
          })}
        </div>
        <Buckets />
      </div>
    );
  } else {
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
  }
};

export default AnimationScreen;
