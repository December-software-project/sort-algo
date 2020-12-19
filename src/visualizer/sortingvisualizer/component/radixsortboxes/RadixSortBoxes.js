import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';

const RadixSortBoxes = () => {
  const { dataSize, countArr, referenceArray } = useContext(VisualizerStateContext);

  const SingleBox = ({ data }) => <div className="box">{data}</div>;

  const StackOfBoxes = ({ item }) => (
    <div className="stack">
      {item.array.map((x) => (
        <SingleBox data={x} />
      ))}
      <div className="number-with-line">{item.value}</div>
    </div>
  );

  return (
    <>
      <div className="all-boxes">
        {referenceArray.map((x) => (
          <SingleBox data={x} />
        ))}
      </div>
      <div className="all-boxes">{}</div>
    </>
  );
};

export default RadixSortBoxes;