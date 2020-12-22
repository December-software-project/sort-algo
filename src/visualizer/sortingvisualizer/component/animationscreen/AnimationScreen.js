import React, { useContext, useEffect } from 'react';
import { useTransition } from 'react-spring';
import AnimatedBlock from '../block/AnimatedBlock';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import {
  arrayCopy,
  isBucketSort,
  isCountingSort,
  isMergeSort,
  isRadixSort,
} from '../../util/GeneralUtil';
import SmallBlock from '../smallBlock/SmallBlock';
import Buckets from '../countingsortbuckets/Buckets';
import MergeSortBlock from '../block/MergeSortBlock';
import RadixSortScreen from '../radixsortboxes/RadixSortScreen';

// non-gradual decrease of animation speed
const animationSpeedArray = [1000, 800, 600, 400, 240, 200, 160, 120, 80, 80];

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
    executeForwardAnimation,
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
        executeForwardAnimation();
      }, animationSpeedArray[speed - 1]);
    } else if (!isReplay && isPlay) {
      resetDataWhenAnimationFinish(referenceArray);
    }
  }, [isPlay, idx]);

  const transitions = useTransition(
    referenceArray.map((data) => {
      if (isMergeSort(visualizerAlgorithm)) {
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

  if (isCountingSort(visualizerAlgorithm)) {
    return (
      <div className="container-one">
        <div className="list">
          {transitions.map(({ item, props: { x, ...rest } }, index) => (
            <SmallBlock
              item={item}
              props={{ x, ...rest }}
              index={index}
              length={length}
              key={index}
              width={800 / dataSize}
            />
          ))}
        </div>
        <Buckets />
      </div>
    );
  } else if (isRadixSort(visualizerAlgorithm)) {
    return (
      <div className="spaced-out-container">
        <RadixSortScreen />
      </div>
    );
  } else if (isBucketSort(visualizerAlgorithm)) {
    return (
      <div className="spaced-out-container">
        <RadixSortScreen />
      </div>
    );
  } else if (isMergeSort(visualizerAlgorithm)) {
    return (
      <div className="container-one">
        <div className="list">
          {transitions.map(({ item, props: { x, ...rest } }, index) => (
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
          ))}
        </div>
        <div className="empty-space-for-merge-sort" />
      </div>
    );
  } else {
    return (
      <div className="list">
        {transitions.map(({ item, props: { x, ...rest } }, index) => (
          <AnimatedBlock
            item={item}
            props={{ x, ...rest }}
            index={index}
            length={length}
            key={index}
            isSwap={item.isSwap}
            width={800 / dataSize}
          />
        ))}
      </div>
    );
  }
};

export default AnimationScreen;
