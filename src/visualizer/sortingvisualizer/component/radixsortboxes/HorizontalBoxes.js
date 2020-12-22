import React from 'react';
import './styles.css';

const HorizontalBoxes = ({ dataSize, referenceArray }) => {
  const SingleBox = ({ item }) => (
    <div
      className="box"
      style={{
        visibility: item.isShown ? `visible` : `hidden`,
      }}
    >
      <div className="number">{item.height}</div>
    </div>
  );

  return (
    <div className="data-arr" style={{ gridTemplateColumns: `repeat(${dataSize}, 1fr)` }}>
      {referenceArray.map((x) => (
        <SingleBox item={x} key={x.id} />
      ))}
    </div>
  );
};

export default HorizontalBoxes;