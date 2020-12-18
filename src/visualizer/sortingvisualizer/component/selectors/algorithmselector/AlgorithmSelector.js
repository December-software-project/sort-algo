import React, { useState, useContext } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { VisualizerStateContext } from '../../../Visualizer';
import 'antd/dist/antd.css';
import { generateArray, isBucketTypeSort } from '../../../util/VisualizerUtil';

const AlgorithmChooser = () => {
  const {
    dataSize,
    isPlay,
    isInMidstOfSort,
    setIsReplay,
    setIsInMidstOfSort,
    setVisualizerAlgorithm,
    setArrayData,
    setAnimationPercentage,
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
    if (isInMidstOfSort && algorithm !== algorithmName) {
      setIsInMidstOfSort(false);
      setArrayData(generateArray(dataSize, algorithmName));
      setIsReplay(false);
      setAnimationPercentage(0);
    } else if (isBucketTypeSort(algorithm) ^ isBucketTypeSort(algorithmName)) {
      setArrayData(generateArray(dataSize, algorithmName));
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
      style={{
        marginTop: 30,
        cursor: 'pointer',
        width: 120,
      }}
    >
      <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'} disabled={isPlay}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{ color: '#8789B5', fontSize: 17 }}
        >
          {algorithm}
          <DownOutlined style={{ transform: 'translateX(5px)' }} />
        </a>
      </Dropdown>
    </div>
  );
};

export default AlgorithmChooser;
