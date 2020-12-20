import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import './styles.css';

const RadixSortBoxes = () => {
  const { referenceArray, stackArr } = useContext(VisualizerStateContext);

  const SingleBox = ({ data }) => <div className="box">{data.height}</div>;

  const StackOfBoxes = ({ individualStack }) => (
    <div className="stack">
      {individualStack.array.map((x) => (
        <SingleBox data={x} />
      ))}
      <div className="number-with-line">{individualStack.value}</div>
    </div>
  );

  return (
    <>
      <div className="data-arr">
        {referenceArray.map((x) => (
          <SingleBox data={x} />
        ))}
      </div>
      <div className="stack-arr">
        {stackArr.map((x) => (
          <StackOfBoxes individualStack={x} />
        ))}
      </div>
    </>
  );
};

export default RadixSortBoxes;
