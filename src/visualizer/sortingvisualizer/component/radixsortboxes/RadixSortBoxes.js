import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import './styles.css';

const RadixSortBoxes = () => {
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

  const getDisplayNumber = (value) => {
    const currentHighlighted = getNumberToHighlight();
    let current = 0;
    let index = 1;
    let numberMapping = [];
    while (value > 0) {
      current = value % 10;
      numberMapping.push([current, currentHighlighted === index]);
      index++;
      value = Math.floor(value / 10);
    }
    return numberMapping.map((x) => <span style={{ color: x[1] && '#3443be', fontWeight: x[1] && 'bold' }}>{x[0]}</span>);
  };

  const SingleBox = ({ item, display }) => (
    <div
      className="box"
      style={{
        visibility: display || item.isShown ? `visible` : `hidden`,
      }}
    >
      <div className="number">{getDisplayNumber(item.height)}</div>
    </div>
  );

  const StackOfBoxes = ({ individualStack }) => (
    <div className="stack">
      <div className="stack-boxes">
        {individualStack.array.map((x) => (
          <SingleBox item={x} key={x.id} display={true} />
        ))}
      </div>
      <div className="number-with-line">{individualStack.value}</div>
    </div>
  );

  return (
    <>
      <div
        className="data-arr"
        style={{ gridTemplateColumns: `repeat(${dataSize}, 1fr)`, gap: 10 }}
      >
        {referenceArray.map((x) => (
          <SingleBox item={x} key={x.id} />
        ))}
      </div>
      <div className="stack-arr">
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} key={x.value} />
        ))}
      </div>
    </>
  );
};

export default RadixSortBoxes;
