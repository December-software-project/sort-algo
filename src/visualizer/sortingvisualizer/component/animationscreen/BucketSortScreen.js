import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import { highlightOnesPlacing } from './NumberHighlighter';
import StackOfBoxes from './StackOfBoxes';
import './styles.css';
import HorizontalArray from './HorizontalArray';

/**
 * Bucket sort screen which encapsulates the fields and components of the screen.
 *
 * @component
 * @category BucketSort
 * @returns {JSX.Element} Bucket sort screen.
 */
const BucketSortScreen = () => {
  const { referenceArray, stackArr, dataSize } = useContext(VisualizerStateContext);

  /**
   * Single oval to represent an item in the data array.
   *
   * @param {Object} item Element in the data array.
   * @returns {JSX.Element} Single oval containing the item.
   */
  const SingleOval = ({ item }) => (
    <div
      className="box"
      style={{
        visibility: item.isShown ? `visible` : `hidden`,
      }}
    >
      <div className="decimal">{highlightOnesPlacing(item.height)}</div>
    </div>
  );

  return (
    <div className="spaced-out-container">
      <HorizontalArray
        dataSize={dataSize}
        referenceArray={referenceArray}
        SingleOval={SingleOval}
      />
      <div className="stack-arr">
        {stackArr.map((stack) => (
          <StackOfBoxes individualStack={stack.array} value={stack.value} key={stack.value} />
        ))}
      </div>
    </div>
  );
};

export default BucketSortScreen;
