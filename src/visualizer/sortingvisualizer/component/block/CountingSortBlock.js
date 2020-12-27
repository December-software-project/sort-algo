import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';

/**
 * A counting sort block which represents a data item in the array.
 *
 * @component
 * @category Block
 * @param item Data item from the reference array.
 * @returns {JSX.Element}
 */
const CountingSortBlock = ({ item }) => {
  const { dataSize } = useContext(VisualizerStateContext);

  return (
    <div
      className="animated-block"
      style={{
        backgroundImage: `linear-gradient(45deg, #287ED0, #5466FF)`,
        height: item.height * 10 + 9,
        width: 800 / dataSize,
        visibility: item.isShown ? `visible` : `hidden`,
      }}
    >
      <span>{item.height}</span>
    </div>
  );
};

export default CountingSortBlock;
