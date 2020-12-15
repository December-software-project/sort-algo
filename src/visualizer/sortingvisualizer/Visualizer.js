import React, { useEffect, useState } from 'react';
import insertionSort from '../algorithm/insertionSort';
import ThreeStateButton from './component/button/threestatebutton/ThreeStateButton';
import Legend from './component/legend/Legend';
import VisualizerHeader from '../../component/header/SectionHeader';
import AlgorithmSelector from './component/selectors/algorithmselector/AlgorithmSelector';
import SpeedSelector from './component/selectors/sliderselector/SliderSelector';
import DataSizeSelector from './component/selectors/sliderselector/SliderSelector';
import './styles.css';
import CodeExplanation from '../codeinformation/codeexplaination/CodeExplanation';
import CodeTemplate from '../codeinformation/codetemplate/CodeTemplate';
import {
  arrayCopy,
  buckets,
  generateArray,
  getAnimationArr,
  isBucketTypeSort,
  resetArray,
  swap,
} from './util/VisualizerUtil';
import NewDataButton from './component/button/newdatabutton/NewDataButton';
import {
  DataSizeSelectorProps,
  SpeedSelectorProps,
} from './component/selectors/sliderselector/SelectorProps';
import AnimationProgressBar from './component/animationprogressbar/AnimationProgressBar';
import BackButton from './component/button/forwardbackbutton/BackButton';
import ForwardButton from './component/button/forwardbackbutton/ForwardButton';
import AnimationScreen from './component/sortingvisualizerscreen/AnimationScreen';

const VisualizerStateContext = React.createContext({ isPlay: false, isReplay: false });

const Visualizer = () => {
  // isPlay and isReplay simulate the 3 states
  const [isPlay, setIsPlay] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [isInMidstOfSort, setIsInMidstOfSort] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [dataSize, setDataSize] = useState(15);
  const [visualizerAlgorithm, setVisualizerAlgorithm] = useState('Bubble Sort');
  const [arrayData, setArrayData] = useState(generateArray(dataSize, visualizerAlgorithm));
  const [referenceArray, setReferenceArray] = useState(arrayCopy(arrayData));
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayCopy(arrayData)));
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [idx, setIdx] = useState(0);
  const [countArr, setCountArr] = useState(arrayCopy(buckets));

  useEffect(() => {
    if (isPlay === false) {
      setAnimationArr(getAnimationArr(visualizerAlgorithm, arrayCopy(arrayData)));
    }
  }, [isPlay, speed, dataSize, visualizerAlgorithm, arrayData]);

  const changeDataSize = (val) => {
    if (val !== dataSize) {
      setDataSize(val);
      setArrayData(generateArray(val, visualizerAlgorithm));
      setCountArr(arrayCopy(buckets));
      setIsReplay(false);
      setAnimationPercentage(0);
    }
  };

  const executeForwardSwapAnimation = () => {
    let animationArrSwapIdx = animationArr[idx];
    const animationPx = Math.floor(((idx + 1) / animationArr.length) * 100);

    if (isBucketTypeSort(visualizerAlgorithm)) {
      const index = animationArrSwapIdx.id;
      const height = animationArrSwapIdx.height;
      if (animationPx <= 50) {
        referenceArray[index].isShown = false;
        countArr[height - 1].count += 1;
      } else {
        referenceArray[index] = animationArrSwapIdx;
        referenceArray[index].isShown = true;
        countArr[height - 1].count -= 1;
      }
    } else {
      setReferenceArray(swap(animationArrSwapIdx[0], animationArrSwapIdx[1], referenceArray));
    }
    setIdx(idx + 1);
    setAnimationPercentage(animationPx);
  };

  const executeBackwardSwapAnimation = () => {
    if (idx - 1 < 0) {
      // this occurs if the users click too fast
      setIdx(0);
      return;
    }

    let animationArrSwapIdx = animationArr[idx - 1];
    const animationPx = Math.floor(((idx - 1) / animationArr.length) * 100);

    if (isBucketTypeSort(visualizerAlgorithm)) {
      const index = animationArrSwapIdx.id;
      const height = animationArrSwapIdx.height;
      if (animationPx < 50) {
        referenceArray[index] = animationArrSwapIdx;
        referenceArray[index].isShown = true;
        countArr[height - 1].count -= 1;
      } else {
        referenceArray[index].isShown = false;
        countArr[height - 1].count += 1;
      }
    } else {
      setReferenceArray(swap(animationArrSwapIdx[1], animationArrSwapIdx[0], referenceArray));
    }

    setIdx(idx - 1);
    setAnimationPercentage(animationPx);
  };

  const resetDataWhenAnimationFinish = () => {
    setIsPlay(false);
    setIsReplay(true);
    resetArray(referenceArray);
  };

  // this is an auto shifting to ensure everything stays at the center
  const translateXOfVisualizer = (dataSize) => {
    if (dataSize > 12) {
      let singleBlockWidth = 200 / dataSize;
      return (dataSize - 12) * singleBlockWidth;
    }
    return 0;
  };

  const value = {
    isPlay,
    isReplay,
    speed,
    arrayData,
    referenceArray,
    animationArr,
    countArr,
    isInMidstOfSort,
    dataSize,
    visualizerAlgorithm,
    animationPercentage,
    idx,
    setIsReplay,
    setIsPlay,
    setIsInMidstOfSort,
    setVisualizerAlgorithm,
    setArrayData,
    setAnimationPercentage,
    setIdx,
    setReferenceArray,
    setCountArr,
    executeForwardSwapAnimation,
    executeBackwardSwapAnimation,
    resetDataWhenAnimationFinish,
  };

  return (
    <div id="visualizer">
      <VisualizerStateContext.Provider value={{ ...value }}>
        <div className="visualizer">
          <div className="visualizer-header-box">
            <VisualizerHeader sectionHeader="Visualizer" translateX="translate(25px)" />
            <AlgorithmSelector />
          </div>
          <div
            className="visualizer-box"
            style={{
              transform: `translateX(-${translateXOfVisualizer(dataSize)}px)`,
            }}
          >
            <AnimationScreen />
          </div>
          <AnimationProgressBar />
          <div className="controller-box">
            <div className="speed-selector-box">
              <SpeedSelector setData={(val) => setSpeed(val)} {...SpeedSelectorProps} />
              <DataSizeSelector setData={(val) => changeDataSize(val)} {...DataSizeSelectorProps} />
            </div>
            <div className="button-box">
              <BackButton />
              <div>
                <ThreeStateButton />
                <NewDataButton />
              </div>
              <ForwardButton />
            </div>
            <div className="legend-box">
              <Legend />
            </div>
          </div>
        </div>
      </VisualizerStateContext.Provider>
      <div className="code">
        <CodeExplanation algo={visualizerAlgorithm} />
        <CodeTemplate algo={visualizerAlgorithm} />
      </div>
    </div>
  );
};

export { VisualizerStateContext };
export default Visualizer;
