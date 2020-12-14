import React, { useEffect, useState } from 'react';
import insertionSort from '../algorithm/insertionSort';
import AnimationScreen from './component/sortingvisualizerscreen/AnimationScreen';
import ThreeStateButton from './component/button/threestatebutton/ThreeStateButton';
import Legend from './component/legend/Legend';
import SectionHeader from './component/header/SectionHeader';
import AlgorithmSelector from './component/selectors/algorithmselector/AlgorithmSelector';
import SpeedSelector from './component/selectors/sliderselector/SliderSelector';
import DataSizeSelector from './component/selectors/sliderselector/SliderSelector';
import './styles.css';
import CodeExplanation from '../codeinformation/codeexplaination/CodeExplanation';
import CodeTemplate from '../codeinformation/codetemplate/CodeTemplate';
import { getAnimationArr, generateArray, swap, resetArray } from '../../utils/VisualizerUtil';
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
  const [arrayData, setArrayData] = useState(generateArray(dataSize));
  const [visualizerAlgorithm, setVisualizerAlgorithm] = useState('Insertion Sort');
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayData.map((x) => x)));
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [idx, setIdx] = useState(0);
  const [referenceArray, setReferenceArray] = useState(arrayData);

  useEffect(() => {
    if (isPlay === false) {
      setAnimationArr(
        getAnimationArr(
          visualizerAlgorithm,
          arrayData.map((x) => x)
        )
      );
    }
  }, [isPlay, speed, dataSize, visualizerAlgorithm, arrayData]);

  const changeDataSize = (val) => {
    if (val !== dataSize) {
      setDataSize(val);
      setArrayData(generateArray(val));
      setIsReplay(false);
      setAnimationPercentage(0);
    }
  };

  const executeForwardSwapAnimation = () => {
    let animationArrSwapIdx = animationArr[idx];
    setReferenceArray(swap(animationArrSwapIdx[0], animationArrSwapIdx[1], referenceArray));
    setIdx(idx + 1);
    setAnimationPercentage(Math.floor(((idx + 1) / animationArr.length) * 100));
  };

  const executeBackwardSwapAnimation = () => {
    let animationArrSwapIdx = animationArr[idx - 1];
    setReferenceArray(swap(animationArrSwapIdx[1], animationArrSwapIdx[0], referenceArray));
    setIdx(idx - 1);
    setAnimationPercentage(Math.floor(((idx - 1) / animationArr.length) * 100));
  };

  const resetDataWhenAnimationFinish = () => {
    setIsPlay(false);
    setIsReplay(true);
    resetArray(arrayData);
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
    animationPercentage: animationPercentage,
    idx: idx,
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
        <div className="visualizer">
          <div className="visualizer-header-box">
            <SectionHeader name="Visualizer" />
            <AlgorithmSelector />
          </div>
          <div
            className="visualizer-box"
            style={{ transform: `translateX(-${translateXOfVisualizer(dataSize)}px)` }}
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
