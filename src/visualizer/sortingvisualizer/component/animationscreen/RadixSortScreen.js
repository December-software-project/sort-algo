import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import { highlightNumber } from './NumberHighlighter';

const RadixSortScreen = () => {
  const { referenceArray, stackArr, dataSize, idx } = useContext(VisualizerStateContext);

  const getNumberToHighlight = () => {
    if (idx < 2 * dataSize) {
      return 1;
    } else if (idx < 4 * dataSize) {
      return 2;
    } else if (idx < 6 * dataSize) {
      return 3;
    } else {
      return -1;
    }
  };

  const SingleBox = ({ item, display, margin }) => (
    <div
      className="box"
      style={{
        visibility: display || item.isShown ? `visible` : `hidden`,
        marginTop: margin,
      }}
    >
      <div className="number">{highlightNumber(item.height, getNumberToHighlight())}</div>
    </div>
  );

  const HorizontalBoxes = ({ dataSize, referenceArray }) => {
    return (
      <div className="data-arr" style={{ gridTemplateColumns: `repeat(${dataSize}, 1fr)` }}>
        {referenceArray.map((x) => (
          <SingleBox item={x} key={x.id} margin={0} />
        ))}
      </div>
    );
  };

  const StackOfBoxes = ({ individualStack }) => (
    <div className="stack">
      <div className="stack-boxes">
        {individualStack.array.map((x) => (
          <SingleBox item={x} key={x.id} display={true} margin={10} />
        ))}
      </div>
      <div className="number-with-line">{individualStack.value}</div>
    </div>
  );

  return (
    <div className="container-one" style={{ justifyContent: `space-between`, minHeight: 370 }}>
      <HorizontalBoxes dataSize={dataSize} referenceArray={referenceArray} />
      <div className="stack-arr">
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} key={x.value} />
        ))}
      </div>
    </div>
  );
};

export default RadixSortScreen;
