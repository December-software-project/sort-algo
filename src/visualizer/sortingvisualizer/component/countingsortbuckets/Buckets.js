import React, { useContext } from 'react';
import '../block/styles.css';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import { translateXOfVisualizer } from '../../util/GeneralUtil';

const Buckets = () => {
  const { dataSize, countArr } = useContext(VisualizerStateContext);

  const colorArr = [
    '#B8B8B8',
    '#b4d3de',
    '#7AC1DB',
    '#74a2d6',
    '#7B9AD6',
    '#6A8FDB',
    '#5480D9',
    '#3B6DD2',
    '#3b5cd2',
    '#274ac8',
    '#1e41c8',
    '#183cc6',
    '#092ec8',
    '#091cc8',
    '#0600c3',
    '#0600a0',
    '#030062',
    '#030030',
    '#030016',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
  ];

  const CountingBlock = ({ item }) => (
    <div
      className="fixed-array-container"
      style={{ transform: `translateX(${translateXOfVisualizer(dataSize)}px)` }}
    >
      <div
        className="animated-block"
        key={item.height}
        style={{
          height: item.height * 10 + 9,
          backgroundColor: colorArr[item.count],
          width: 800 / Math.max(dataSize, 9),
        }}
      >
        <span>{item.height}</span>
      </div>
      <span className="count">{item.count}</span>
    </div>
  );

  return (
    <div className="fixed-array">
      {countArr.map((item) => (
        <CountingBlock item={item} />
      ))}
    </div>
  );
};

export default Buckets;
