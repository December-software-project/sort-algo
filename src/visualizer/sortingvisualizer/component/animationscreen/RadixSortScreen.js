import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import './styles.css';
import '../multipleblocks/styles.css';
import HorizontalArray from '../multipleblocks/HorizontalArray';
import HighlightedOval from '../block/HighlightedOval';
import StackOfBoxes from '../multipleblocks/StackOfBoxes';

/**
 * Radix sort screen which encapsulates the fields and components of the animation.
 *
 * @component
 * @category AnimationScreen
 * @returns {JSX.Element} Radix sort screen component.
 */
const RadixSortScreen = () => {
  const { referenceArray, stackArr } = useContext(VisualizerStateContext);

  return (
    <div className="container-one" style={{ justifyContent: `space-between`, minHeight: 370 }}>
      <HorizontalArray referenceArray={referenceArray} BlockType={HighlightedOval} />
      <div className="stack-arr">
        {stackArr.map((stack) => (
          <StackOfBoxes individualStack={stack} key={stack.value} />
        ))}
      </div>
    </div>
  );
};

export default RadixSortScreen;
