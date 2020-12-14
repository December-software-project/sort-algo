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
import { getAnimationArr, generateArray, getAnimation } from './util/VisualizerUtil';
import ResetButton from './component/button/resetbutton/ResetButton';
import {
  SpeedSelectorProps,
  DataSizeSelectorProps,
} from './component/selectors/sliderselector/SelectorProps';

const VisualizerStateContext = React.createContext({ isPlay: false, isReplay: false });

const Visualizer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [isInMidstOfSort, setIsInMidstOfSort] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [dataSize, setDataSize] = useState(10);
  const [visualizerAlgorithm, setVisualizerAlgorithm] = useState('Bubble Sort');
  const [arrayData, setArrayData] = useState(generateArray(dataSize, visualizerAlgorithm));
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayData.map((x) => x)));

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
    setDataSize(val);
    setArrayData(generateArray(val, visualizerAlgorithm));
    setIsReplay(false);
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
    setIsReplay: (val) => setIsReplay(val),
    setIsPlay: (val) => setIsPlay(val),
    setIsInMidstOfSort: (val) => setIsInMidstOfSort(val),
    setVisualizerAlgorithm: (val) => setVisualizerAlgorithm(val), // this is being used
    setArrayData: (val) => setArrayData(val),
  };

  return (
    <div id="visualizer">
      <VisualizerStateContext.Provider value={{ ...value }}>
        <div className="visualizer">
          <div className="visualizer-header-box">
            <SectionHeader name="Visualizer" />
            <AlgorithmSelector />
          </div>
          <div className="visualizer-box">{getAnimation(visualizerAlgorithm)}</div>
          <div className="controller-box">
            <div className="speed-selector-box">
              <SpeedSelector setData={(val) => setSpeed(val)} {...SpeedSelectorProps} />
              <DataSizeSelector setData={(val) => changeDataSize(val)} {...DataSizeSelectorProps} />
            </div>
            <div className="button-box">
              <ThreeStateButton />
              <ResetButton />
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
