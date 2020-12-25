import React, { useEffect, useState } from 'react';
import Legend from './component/legend/Legend';
import SectionHeader from '../../component/header/SectionHeader';
import AlgorithmSelector from './component/selectors/algorithmselector/AlgorithmSelector';
import SpeedSelector from './component/selectors/sliderselector/SliderSelector';
import DataSizeSelector from './component/selectors/sliderselector/SliderSelector';
import './styles.css';
import {
  arrayCopy,
  generateArray,
  getAnimationArr,
  isBucketSort,
  isCountingSort,
  isMergeSort,
  isQuickSort,
  isRadixOrBucket,
  isRadixSort,
  resetArray,
  roundToTwoDp,
  translateXOfVisualizer,
} from './util/GeneralUtil';
import { executeGenericSort } from './util/SwappingAlgoUtil';
import { executeMergeSortBackward, executeMergeSortForward } from './util/MergeSortUtil';
import { executeQuickSort } from './util/QuickSortUtil';
import { buckets, executeCountSort } from './util/CountingSortUtil';
import { executeRadixSort, stack } from './util/RadixSortUtil';
import {
  DataSizeSelectorProps,
  SpeedSelectorProps,
} from './component/selectors/sliderselector/SelectorProps';
import AnimationProgressBar from './component/animationprogressbar/AnimationProgressBar';
import AnimationScreen from './component/animationscreen/AnimationScreen';
import StepByStep from './component/stepbystep/StepByStep';
import bubbleSort from '../algorithm/sortingalgorithms/bubbleSort';
import { executeBucketSort } from './util/BucketSortUtil';
import ButtonBox from './component/button/ButtonBox';
import CodeInformation from '../codeinformation/CodeInformation';

const VisualizerStateContext = React.createContext({ isPlay: false, isReplay: false });

const Visualizer = () => {
  // isPlay and isReplay simulate the 3 states
  const [isPlay, setIsPlay] = useState(false);
  const [isReplay, setIsReplay] = useState(false);

  // this is to ensure we can click back arrow without trigger any new re-rendering of data
  const [isReset, setIsReset] = useState(false);

  const [isInMidstOfSort, setIsInMidstOfSort] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [dataSize, setDataSize] = useState(15);
  const [visualizerAlgorithm, setVisualizerAlgorithm] = useState('Bubble Sort');
  const [arrayData, setArrayData] = useState(generateArray(dataSize, visualizerAlgorithm));
  const [referenceArray, setReferenceArray] = useState(arrayCopy(arrayData));
  const [animationArr, setAnimationArr] = useState(bubbleSort(arrayCopy(arrayData)));
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [idx, setIdx] = useState(0);
  const [countArr, setCountArr] = useState(arrayCopy(buckets));
  const [stackArr, setStackArr] = useState(arrayCopy(stack));

  // This is introduced to simplify the back animation for MergeSort
  const [historyArr, setHistoryArr] = useState([]);

  useEffect(() => {
    if (isPlay === false) {
      setAnimationArr(getAnimationArr(visualizerAlgorithm, arrayCopy(arrayData)));
    }
  }, [isPlay, speed, dataSize, visualizerAlgorithm, arrayData]);

  /**
   * Changes the number of "block" or "ovals" for the sorting animation.
   *
   * @param val {number} The number of "block" or "ovals" for sorting animation.
   */
  const changeDataSize = (val) => {
    if (val !== dataSize) {
      setDataSize(val);
      setArrayData(generateArray(val, visualizerAlgorithm));
      setCountArr(arrayCopy(buckets));
      setStackArr(arrayCopy(stack));
      setIsReplay(false);
      setAnimationPercentage(0);
      setIsReset(true);
    }
  };

  /**
   * Executes one step of the sorting animation, depending on the selected algorithm.
   */
  const executeForwardAnimation = () => {
    let currentAnimation = animationArr[idx];
    const animationPx = roundToTwoDp(((idx + 1) / animationArr.length) * 100);
    let nextReferenceArray;
    if (isCountingSort(visualizerAlgorithm)) {
      nextReferenceArray = executeCountSort(
        currentAnimation,
        referenceArray,
        animationPx,
        countArr,
        true
      );
    } else if (isRadixSort(visualizerAlgorithm)) {
      nextReferenceArray = executeRadixSort(currentAnimation, referenceArray, stackArr, true);
    } else if (isBucketSort(visualizerAlgorithm)) {
      nextReferenceArray = executeBucketSort(currentAnimation, referenceArray, stackArr, true);
    } else if (isMergeSort(visualizerAlgorithm)) {
      nextReferenceArray = executeMergeSortForward(
        currentAnimation,
        referenceArray,
        historyArr,
        setReferenceArray
      );
    } else if (isQuickSort(visualizerAlgorithm)) {
      nextReferenceArray = executeQuickSort(
        currentAnimation,
        referenceArray,
        visualizerAlgorithm,
        setReferenceArray
      );
    } else {
      // Generic Sort refers to Insertion, Bubble, Selection, Shell Sort
      nextReferenceArray = executeGenericSort(
        currentAnimation,
        referenceArray,
        visualizerAlgorithm,
        setReferenceArray
      );
    }

    if (idx + 1 >= animationArr.length) {
      resetDataWhenAnimationFinish(nextReferenceArray);
    }
    setIdx(idx + 1);
    setAnimationPercentage(animationPx);
  };

  /**
   * Executes one step of the reverse in the sorting animation, depending on the sorting algorithm
   */
  const executeBackwardAnimation = () => {
    // this occurs if the users click too fast
    if (idx - 1 < 0) {
      setIdx(0);
      return;
    }
    let currentAnimation = animationArr[idx - 1];
    const animationPx = roundToTwoDp(((idx - 1) / animationArr.length) * 100);

    if (isCountingSort(visualizerAlgorithm)) {
      executeCountSort(currentAnimation, referenceArray, animationPx, countArr, false);
    } else if (isRadixSort(visualizerAlgorithm)) {
      executeRadixSort(currentAnimation, referenceArray, stackArr, false);
    } else if (isBucketSort(visualizerAlgorithm)) {
      executeBucketSort(currentAnimation, referenceArray, stackArr, false);
    } else if (isMergeSort(visualizerAlgorithm)) {
      executeMergeSortBackward(historyArr, setReferenceArray);
    } else if (isQuickSort(visualizerAlgorithm)) {
      executeQuickSort(currentAnimation, referenceArray, visualizerAlgorithm, setReferenceArray);
    } else {
      executeGenericSort(currentAnimation, referenceArray, visualizerAlgorithm, setReferenceArray);
    }

    if (idx === animationArr.length) {
      setIsReplay(false);
    }
    setIdx(idx - 1);
    setAnimationPercentage(animationPx);
  };

  /**
   * Resets the states of the "blocks" or "oval" when the sorting animation is done
   *
   * @param finalReferenceArray The end state of the array holding the states of each block.
   */
  const resetDataWhenAnimationFinish = (finalReferenceArray) => {
    setIsPlay(false);
    setIsReplay(true);
    setReferenceArray(resetArray(visualizerAlgorithm, finalReferenceArray));
  };

  /**
   * A object contains values to be passed around the other components via React's context
   */
  const value = {
    isPlay,
    isReplay,
    speed,
    arrayData,
    referenceArray,
    animationArr,
    countArr,
    stackArr,
    isInMidstOfSort,
    dataSize,
    setDataSize,
    visualizerAlgorithm,
    animationPercentage,
    idx,
    isReset,
    setIsReset,
    setIsReplay,
    setIsPlay,
    setIsInMidstOfSort,
    setVisualizerAlgorithm,
    setArrayData,
    setAnimationPercentage,
    setAnimationArr,
    setIdx,
    setReferenceArray,
    setCountArr,
    setStackArr,
    setHistoryArr,
    executeForwardAnimation,
    executeBackwardAnimation,
    resetDataWhenAnimationFinish,
  };

  return (
    <div id="visualizer">
      <VisualizerStateContext.Provider value={{ ...value }}>
        <div className="visualizer">
          <div className="visualizer-header-box">
            <SectionHeader sectionHeader="Visualizer" translateX="translate(25px)" />
            <AlgorithmSelector />
          </div>
          <div
            className="visualizer-box"
            style={{
              transform:
                !isRadixOrBucket(visualizerAlgorithm) &&
                `translateX(-${translateXOfVisualizer(dataSize)}px)`,
            }}
          >
            <AnimationScreen />
          </div>
          <StepByStep />
          <AnimationProgressBar />
          <div className="controller-box">
            <div className="speed-selector-box">
              <SpeedSelector setData={(val) => setSpeed(val)} {...SpeedSelectorProps} />
              <DataSizeSelector setData={(val) => changeDataSize(val)} {...DataSizeSelectorProps} />
            </div>
            <ButtonBox />
            <Legend />
          </div>
        </div>
      </VisualizerStateContext.Provider>
      <CodeInformation visualizerAlgorithm={visualizerAlgorithm} />
    </div>
  );
};

export { VisualizerStateContext };
export default Visualizer;
