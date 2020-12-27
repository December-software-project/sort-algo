import React, { useContext } from 'react';
import CountingSortBlock from '../block/CountingSortBlock';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import HorizontalArray from '../multipleblocks/HorizontalArray';
import CountBlock from '../block/CountBlock';

/**
 * Counting sort screen which encapsulates the fields and components of the animation.
 *
 * @component
 * @category AnimationScreen
 * @returns {JSX.Element} Counting sort screen component.
 */
const CountingSortScreen = () => {
  const { referenceArray, countArr } = useContext(VisualizerStateContext);

  return (
    <div className="container-one">
      <HorizontalArray referenceArray={referenceArray} BlockType={CountingSortBlock} />
      <div style={{ marginTop: `6%` }}>
        <HorizontalArray referenceArray={countArr} BlockType={CountBlock} />
      </div>
    </div>
  );
};

export default CountingSortScreen;
