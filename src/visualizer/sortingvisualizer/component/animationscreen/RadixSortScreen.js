import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import { highlightNumber } from './NumberHighlighter';
import './styles.css';
import HorizontalArray from './HorizontalArray';

/**
 * Radix sort screen which encapsulates the fields and components of the screen.
 *
 * @component
 * @category RadixSort
 * @returns {JSX.Element} Radix sort screen.
 */
const RadixSortScreen = () => {
  const { referenceArray, stackArr, dataSize, idx } = useContext(VisualizerStateContext);

  /**
   * Retrieves the current number to highlight. This depends on the stage of the animation.
   *
   * @returns {number} Number to highlight.
   */
  const getNumberToHighlight = () => {
    if (idx < 2 * dataSize) {
      return 1;
    } else if (idx < 4 * dataSize) {
      return 2;
    } else if (idx < 6 * dataSize) {
      return 3;
    } else {
      // No highlight case
      return -1;
    }
  };

  /**
   * Single oval to represent an item in the data array.
   *
   * @param {Object} item Element in the data array.
   * @param {boolean} display
   * @param {number} marginTop Margin
   * @returns {JSX.Element} Single oval containing the item.
   */
  const SingleOval = ({ item, display, marginTop }) => (
    <div
      className="box"
      style={{
        visibility: display || item.isShown ? `visible` : `hidden`,
        marginTop: marginTop,
      }}
    >
      <div className="number">{highlightNumber(item.height, getNumberToHighlight())}</div>
    </div>
  );

  /**
   * Stack of boxes of an item in the bucket for radix sort.
   *
   * @param {Object} individualStack A single stack in the buckets.
   * @returns {JSX.Element} Stack of boxes component.
   */
  const StackOfBoxes = ({ individualStack }) => (
    <div className="stack">
      <div className="stack-boxes">
        {individualStack.array.map((x) => (
          <SingleOval item={x} key={x.id} display={true} marginTop={10} />
        ))}
      </div>
      <div className="number-with-line">{individualStack.value}</div>
    </div>
  );

  return (
    <div className="container-one" style={{ justifyContent: `space-between`, minHeight: 370 }}>
      <HorizontalArray
        dataSize={dataSize}
        referenceArray={referenceArray}
        SingleOval={SingleOval}
      />
      <div className="stack-arr">
        {stackArr.map((stack) => (
          <StackOfBoxes individualStack={stack} key={stack.value} />
        ))}
      </div>
    </div>
  );
};

export default RadixSortScreen;
