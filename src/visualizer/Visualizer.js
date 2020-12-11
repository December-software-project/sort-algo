import React, { useEffect, useState } from 'react';
import insertionSort from './algorithm/insertionSort';
import quickSort from './algorithm/quickSort';
import { generateArray } from './component/block/data';
import AnimationScreen from './sortingvisualizer/AnimationScreen';
import PlayBackButton from './component/playbackbutton/PlaybackButton';
import Legend from './component/legend/Legend';
import VisualizerHeader from './component/header/VisualizerHeader';
import AlgorithmSelector from './component/selectors/algorithmselector/AlgorithmSelector';
import SpeedSelector from './component/selectors/sliderselector/SliderSelector';
import DataSizeSelector from './component/selectors/sliderselector/SliderSelector';
import './styles.css';

const Visualizer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [dataSize, setDataSize] = useState(10);
  const [arrayData, setArrayData] = useState(generateArray(dataSize));
  const [algorithm, setAlgorithm] = useState('Insertion Sort');
  const [animationArr, setAnimationArr] = useState(insertionSort(arrayData.map((x) => x)));

  const swap = (firstIdx, secondIdx, arr) => {
    let newTempArr = resetArray(arr);
    let tmp = newTempArr[firstIdx];
    newTempArr[firstIdx] = newTempArr[secondIdx];
    newTempArr[secondIdx] = tmp;
    newTempArr[firstIdx].isSwap = true;
    newTempArr[secondIdx].isSwap = true;
    return newTempArr;
  };
  const resetArray = (arr) => {
    return arr.map((x) => {
      let tempArrElement = x;
      tempArrElement.isSwap = false;
      return tempArrElement;
    });
  };

  const getAnimationArr = (algo, arrayData) => {
    switch (algo) {
      case 'Insertion Sort':
        return insertionSort(arrayData);
      case 'Quick Sort':
        return quickSort(arrayData);
    }
  };

  useEffect(() => {
    setAnimationArr(
      getAnimationArr(
        algorithm,
        arrayData.map((x) => x)
      )
    );
  }, [isPlay, speed, dataSize, algorithm]);
  return (
    <div className="visualizer">
      <div className="visualizer-header-box">
        <VisualizerHeader />
        <AlgorithmSelector setVisualizerAlgorithm={(algo) => setAlgorithm(algo)} />
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
            }}
            min={5}
            max={15}
            name={'Size'}
            isPlay={isPlay}
          />
        </div>
        <div className="button-box">
          <PlayBackButton onClick={() => setIsPlay(!isPlay)} isPlay={isPlay} />
        </div>
        <div className="legend-box">
          <Legend />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
