import React, { useContext, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { VisualizerStateContext } from '../../../Visualizer';
import 'antd/dist/antd.css';
import { arrayCopy, generateArray, isRadixOrBucket } from '../../../util/GeneralUtil';
import { buckets } from '../../../util/CountingSortUtil';
import './styles.css';
import { stack } from '../../../util/RadixSortUtil';

/**
 * A drop down menu which allows users to pick their algorithm for the visualizer.
 */
const AlgorithmChooser = () => {
  const {
    dataSize,
    setDataSize,
    isPlay,
    isInMidstOfSort,
    setIsReplay,
    setIsInMidstOfSort,
    setVisualizerAlgorithm,
    setArrayData,
    setAnimationPercentage,
    setIsReset,
    setCountArr,
    setStackArr,
    setHistoryArr,
  } = useContext(VisualizerStateContext);

  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  const listOfAlgorithm = [
    { algorithmName: 'Bubble Sort', key: '0' },
    { algorithmName: 'Insertion Sort', key: '1' },
    { algorithmName: 'Selection Sort', key: '2' },
    { algorithmName: 'Merge Sort', key: '3' },
    { algorithmName: 'Quick Sort', key: '4' },
    { algorithmName: 'Heap Sort', key: '5' },
    { algorithmName: 'Shell Sort', key: '6' },
    { algorithmName: 'Counting Sort', key: '7' },
    { algorithmName: 'Radix Sort', key: '8' },
    { algorithmName: 'Bucket Sort', key: '9' },
  ];

  const handleMenuClick = (algorithmName) => {
    setAlgorithm(algorithmName);
    setVisualizerAlgorithm(algorithmName);
    if (algorithm !== algorithmName) {
      if (isInMidstOfSort) {
        setIsInMidstOfSort(false);
      }
      if (dataSize > 10 && isRadixOrBucket(algorithmName)) {
        setArrayData(generateArray(10, algorithmName));
        setDataSize(10);
      } else {
        setArrayData(generateArray(dataSize, algorithmName));
      }
      setIsReplay(false);
      setIsReset(true);
      setCountArr(arrayCopy(buckets));
      setStackArr(arrayCopy(stack));
      setHistoryArr([]);
      setAnimationPercentage(0);
    }
  };

  const menu = (
    <Menu>
      {listOfAlgorithm.map(({ algorithmName, key }) => {
        return (
          <Menu.Item
            key={key}
            onClick={() => handleMenuClick(algorithmName)}
            style={{ color: '#8789B5' }}
          >
            {algorithmName}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div
      className="algorithm-selector-holder"
      style={{ cursor: isPlay ? 'not-allowed' : 'cursor' }}
    >
      <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'} disabled={isPlay}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          id="algorithm-selector-drop-down-arrow"
        >
          {algorithm}
          <DownOutlined
            style={{ transform: 'translateX(5px)', cursor: isPlay ? 'not-allowed' : 'cursor' }}
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default AlgorithmChooser;
