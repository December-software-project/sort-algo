import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const AlgorithmChooser = ({ setVisualizerAlgorithm }) => {
  const [algorithm, setAlgorithm] = useState('Insertion Sort');
  const listOfAlgorithm = [
    { algorithmName: 'Insertion Sort', key: '0' },
    { algorithmName: 'Merge Sort', key: '1' },
    { algorithmName: 'Quick Sort', key: '2' },
    { algorithmName: 'Heap Sort', key: '3' },
    { algorithmName: 'Bubble Sort', key: '4' },
    { algorithmName: 'Selection Sort', key: '5' },
    { algorithmName: 'Shell Sort', key: '6' },
    { algorithmName: 'Radix Sort', key: '7' },
    { algorithmName: 'Bucket Sort', key: '8' },
    { algorithmName: 'Counting Sort', key: '9' },
  ];

  const menu = (
    <Menu>
      {listOfAlgorithm.map(({ algorithmName, key }) => {
        return (
          <Menu.Item
            key={key}
            onClick={() => {
              setAlgorithm(algorithmName);
              setVisualizerAlgorithm(algorithmName);
            }}
            style={{ color: '#8789B5' }}
          >
            {algorithmName}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div style={{ transform: 'translateY(30px)' }}>
      <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{ color: '#8789B5', fontSize: 15 }}
        >
          {algorithm}
          <DownOutlined style={{ transform: 'translateX(5px)' }} />
        </a>
      </Dropdown>
    </div>
  );
};

export default AlgorithmChooser;
