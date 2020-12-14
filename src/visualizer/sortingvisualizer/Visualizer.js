import React, { useEffect, useState } from 'react';
import insertionSort from '../algorithm/insertionSort';
import ThreeStateButton from './component/button/threestatebutton/ThreeStateButton';
import Legend from './component/legend/Legend';
import SectionHeader from './component/header/SectionHeader';
import AlgorithmSelector from './component/selectors/algorithmselector/AlgorithmSelector';
import SpeedSelector from './component/selectors/sliderselector/SliderSelector';
import DataSizeSelector from './component/selectors/sliderselector/SliderSelector';
import './styles.css';
import CodeExplanation from '../codeinformation/codeexplaination/CodeExplanation';
import CodeTemplate from '../codeinformation/codetemplate/CodeTemplate';
import {
  getAnimationArr,
  generateArray,
  getAnimation,
  swap,
  resetArray,
  isBucketTypeSort,
} from './util/VisualizerUtil';
import NewDataButton from './component/button/newdatabutton/NewDataButton';
import {
  SpeedSelectorProps,
  DataSizeSelectorProps,
} from './component/selectors/sliderselector/SelectorProps';
import AnimationProgressBar from './component/animationprogressbar/AnimationProgressBar';
import BackButton from './component/button/forwardbackbutton/BackButton';
import ForwardButton from './component/button/forwardbackbutton/ForwardButton';

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
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayData.map((x) => x)));
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [idx, setIdx] = useState(0);
  const [referenceArray, setReferenceArray] = useState(arrayData);
  const [countArr, setCountArr] = useState([
    { height: 1, count: 0 },
    { height: 2, count: 0 },
    { height: 3, count: 0 },
    { height: 4, count: 0 },
    { height: 5, count: 0 },
    { height: 6, count: 0 },
    { height: 7, count: 0 },
    { height: 8, count: 0 },
    { height: 9, count: 0 },
  ]);

  useEffect(() => {
    if (isPlay === false) {
      setAnimationArr(
        getAnimationArr(
          visualizerAlgorithm,
          arrayData.map((x) => x)
        )
      );
    }
    // if (originalArray.length === 0) {
    //   setOriginalArray(arrayData);
    // }
  }, [isPlay, speed, dataSize, visualizerAlgorithm, arrayData]);

  const changeDataSize = (val) => {
    if (val !== dataSize) {
      setDataSize(val);
      setArrayData(generateArray(val, visualizerAlgorithm));
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
    if (isBucketTypeSort(visualizerAlgorithm)) {
      resetArray(arrayData);
    }
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
    isPlay: isPlay,
    isReplay: isReplay,
    speed: speed,
    arrayData: arrayData,
    animationArr: animationArr,
    isInMidstOfSort: isInMidstOfSort,
    dataSize: dataSize,
    visualizerAlgorithm: visualizerAlgorithm,
    animationPercentage: animationPercentage,
    idx: idx,
    countArr,
    referenceArray,
    setIsReplay: (val) => setIsReplay(val),
    setIsPlay: (val) => setIsPlay(val),
    setIsInMidstOfSort: (val) => setIsInMidstOfSort(val),
    setVisualizerAlgorithm: (val) => setVisualizerAlgorithm(val), // this is being used
    setArrayData: (val) => setArrayData(val),
    setAnimationPercentage: (val) => setAnimationPercentage(val),
    setIdx: (val) => setIdx(val),
    setReferenceArray: (val) => setReferenceArray(val),
    executeForwardSwapAnimation: () => executeForwardSwapAnimation(), // this is being used
    executeBackwardSwapAnimation: () => executeBackwardSwapAnimation(), // this is being used
    resetDataWhenAnimationFinish: () => resetDataWhenAnimationFinish(), // this is being used
  };

  return (
    <div id="visualizer">
      <VisualizerStateContext.Provider value={{ ...value }}>
        <div className="visualizer" style={{maxHeight: 1100}}>
          <div className="visualizer-header-box">
            <SectionHeader name="Visualizer" />
            <AlgorithmSelector />
          </div>
          <div
            className="visualizer-box"
            // style={{
            //   transform: `translateX(-${translateXOfVisualizer(dataSize)}px)`,
            // }}
          >
            {getAnimation(visualizerAlgorithm)}
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
