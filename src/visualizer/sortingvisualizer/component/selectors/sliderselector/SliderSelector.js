import React, { useContext, useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { isRadixOrBucket } from '../../../util/GeneralUtil';

/**
 * A generic component for the slider.
 *
 * @component
 * @param {function} setData A method to change the data upon sliding.
 * @param {number} min The minimum value for the slider.
 * @param {number} max The maximum value for the slider.
 * @param {string} name The name to be displayed for the slider.
 * @returns {JSX.Element} A slider component that is bounded by {@code min} and {@code max}.
 */
const SliderSelector = ({ setData, min, max, name }) => {
  const { isPlay, visualizerAlgorithm } = useContext(VisualizerStateContext);

  const maxSize = isRadixOrBucket(visualizerAlgorithm) ? 10 : max;

  const [sliderData, setSliderData] = useState(() => Math.floor((min + maxSize) / 2));

  return (
    <div className="selector-holder">
      <span>
        {name}: {sliderData}
      </span>
      <Slider
        defaultValue={Math.floor((min + maxSize) / 2)}
        min={min}
        max={maxSize}
        onChange={(val) => setSliderData(val)}
        onAfterChange={() => setData(sliderData)}
        disabled={isPlay}
      />
    </div>
  );
};

export default SliderSelector;
