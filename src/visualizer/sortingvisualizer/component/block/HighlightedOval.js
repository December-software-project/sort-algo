import { highlightDigit } from './HighlightUtil';
import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import './styles.css';

/**
 * Single oval to represent an item in the reference array.
 *
 * @component
 * @category Block
 * @param {Object} item Element in the reference array.
 * @param {boolean} display States if the oval should be highlighted.
 * @param {number} marginTop Margin
 * @returns {JSX.Element} Single oval containing the item.
 */
const HighlightedOval = ({ item, display, marginTop }) => {
  const { idx, dataSize } = useContext(VisualizerStateContext);

  return (
    <div
      className="oval"
      style={{
        visibility: display || item.isShown ? `visible` : `hidden`,
        marginTop: marginTop,
      }}
    >
      <div className="reversed-number">{highlightDigit(item.height, idx, dataSize)}</div>
    </div>
  );
};

export default HighlightedOval;
