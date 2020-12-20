import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import "./styles.css";

const RadixSortBoxes = () => {
  const { dataSize, referenceArray, stackArr } = useContext(VisualizerStateContext);

  const SingleBox = ({ data }) => <div className="box">{data.height}</div>;

  const StackOfBoxes = ({ individualStack }) => (
    <div className="stack">
      {individualStack.array.map((x) => (
        <SingleBox data={x} />
      ))}
      <div className="number-with-line">
        {individualStack.value}
      </div>
    </div>
  );

  return (
    <>
      <div className="all-boxes">
        {referenceArray.map((x) => (
          <SingleBox data={x} />
        ))}
      </div>
      <div className="all-boxes" style={{ marginTop: 50 }}>
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} />
        ))}
      </div>
    </>
  );
};

export default RadixSortBoxes;
