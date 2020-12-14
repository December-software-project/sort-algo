import React, { useContext } from 'react';
import '../block/styles.css';
import './buckets.css';
import { VisualizerStateContext } from '../../Visualizer';

const Buckets = () => {
  const { dataSize, countArr } = useContext(VisualizerStateContext);

  const colorArr = [
    '#B8B8B8',
    '#b4d3de',
    '#4f8bac',
    '#768ca2',
    '#2d6c8a',
    '#117cae',
    '#006da5',
    '#184783',
    '#023e83',
    '#002b58',
    '#001e40',
    '#756fc1',
    '#524aa5',
    '#433c83',
    '#363170',
  ];

  const countBlock = (item) => (
    <div className="fixedArrayContainer">
      <div
        className="animated-block"
        key={item.height}
        style={{
          height: item.height * 18,
          backgroundImage: 'none',
          backgroundColor: colorArr[item.count],
          width: 800 / Math.max(dataSize, 9),
        }}
      >
        <span>{item.height}</span>
      </div>
      <span className="count">{item.count}</span>
    </div>
  );

  return <div className="fixedArray">{countArr.map((item) => countBlock(item))}</div>;
};

export default Buckets;
