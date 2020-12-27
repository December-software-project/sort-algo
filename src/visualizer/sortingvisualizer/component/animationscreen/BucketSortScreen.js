import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../Visualizer';
import StackOfAnimatedBoxes from '../multipleblocks/StackOfAnimatedBoxes';
import './styles.css';
import HorizontalArray from '../multipleblocks/HorizontalArray';
import Oval from '../block/Oval';

/**
 * Bucket sort screen which encapsulates the fields and components of the animation.
 *
 * @component
 * @category AnimationScreen
 * @returns {JSX.Element} Bucket sort screen component.
 */
const BucketSortScreen = () => {
  const { referenceArray, stackArr } = useContext(VisualizerStateContext);

  return (
    <div className="spaced-out-container">
      <HorizontalArray referenceArray={referenceArray} BlockType={Oval} />
      <div className="stack-arr">
        {stackArr.map((stack) => (
          <StackOfAnimatedBoxes
            individualStack={stack.array}
            value={stack.value}
            key={stack.value}
          />
        ))}
      </div>
    </div>
  );
};

export default BucketSortScreen;
