import React, { useState } from 'react';
import '../block/styles.css';
import './buckets.css';

const Buckets = () => {
  const [arr, setArr] = useState([
    { height: 1, count: 0 },
    { height: 2, count: 0 },
    { height: 3, count: 0 },
    { height: 4, count: 0 },
    { height: 5, count: 0 },
    { height: 6, count: 0 },
    { height: 7, count: 0 },
    { height: 8, count: 0 },
    { height: 9, count: 0 },
  ]);
  const colorArr = [`grey`, `blue`, `black`];

  const countBlock = (item) => (
    <div className="fixedArrayContainer">
      <div
        className="animated-block"
        style={{
          height: item.height * 22,
          backgroundImage: 'none',
          backgroundColor: colorArr[item.count],
        }}
      >
        <span>{item.height}</span>
      </div>
      <span className="count">{item.count}</span>
    </div>
  );

  return <div className="fixedArray">{arr.map((item) => countBlock(item))}</div>;
};

export default Buckets;
