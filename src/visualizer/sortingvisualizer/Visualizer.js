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
import { getAnimationArr, resetArray, swap, generateArray } from '../../utils/VisualizerUtil';
import ResetButton from './component/button/resetbutton/ResetButton';

const Visualizer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [isInMidstOfSort, setIsInMidstOfSort] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [dataSize, setDataSize] = useState(10);
  const [arrayData, setArrayData] = useState(generateArray(dataSize));
  const [algorithm, setAlgorithm] = useState('Insertion Sort');
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayData.map((x) => x)));

  useEffect(() => {
    if (isPlay === false) {
      setAnimationArr(
        getAnimationArr(
          algorithm,
          arrayData.map((x) => x)
        )
      );
    }
  }, [isPlay, speed, dataSize, algorithm, arrayData]);

  return (
    <>
      <div className="visualizer" id="visualizer">
        <div className="visualizer-header-box">
          <SectionHeader name="Visualizer" />
          <AlgorithmSelector
            setVisualizerAlgorithm={(algo) => setAlgorithm(algo)}
            isInMidstOfSort={isInMidstOfSort}
            setIsInMidstOfSort={() => setIsInMidstOfSort(false)}
            setData={() => setArrayData(generateArray(dataSize))}
            isPlay={isPlay}
            setIsReplay={() => setIsReplay(false)}
          />
        </div>
        <div className="visualizer-box">
          <AnimationScreen
            dataArray={arrayData}
            animationArr={animationArr}
            swap={(firstIdx, secondIdx, arr) => swap(firstIdx, secondIdx, arr)}
            isPlay={isPlay}
            setIsPlay={() => setIsPlay(!isPlay)}
            resetArray={(arr) => resetArray(arr)}
            speed={speed}
            setIsReplay={() => setIsReplay(true)}
            isReplay={isReplay}
          />
        </div>
        <div className="controller-box">
          <div className="speed-selector-box">
            <SpeedSelector
              setData={(val) => setSpeed(val)}
              min={1}
              max={10}
              name={'Speed'}
              isPlay={isPlay}
            />
            <DataSizeSelector
              setData={(val) => {
                setDataSize(val);
                setArrayData(generateArray(val));
                setIsReplay(false);
              }}
              min={5}
              max={15}
              name={'Size'}
              isPlay={isPlay}
            />
          </div>
          <div className="button-box">
            <ThreeStateButton
              onClick={() => {
                if (isReplay) {
                  setIsReplay(false);
                  setTimeout(() => setIsPlay(true), 300);
                } else {
                  setIsPlay(!isPlay);
                }
                setIsInMidstOfSort(true);
              }}
              isPlay={isPlay}
              isReplay={isReplay}
            />
            <ResetButton
              onClick={() => {
                setArrayData(generateArray(dataSize));
                setIsInMidstOfSort(false);
              }}
              isPlay={isPlay}
              setIsReplay={() => setIsReplay(false)}
            />
          </div>
          <div className="legend-box">
            <Legend />
          </div>
        </div>
      </div>
      <div className="code">
        <CodeExplanation algo={algorithm} />
        <CodeTemplate algo={algorithm} />
      </div>
    </>
  );
};

export default Visualizer;
