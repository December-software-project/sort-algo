import React from 'react';
import RadixSortBoxes from '../radixsortboxes/RadixSortBoxes';

const RadixSortScreen = () => {
  return (
    <div className="container-one" style={{ justifyContent: `space-between`, minHeight: 370 }}>
      <RadixSortBoxes />
    </div>
  );
};

export default RadixSortScreen;
