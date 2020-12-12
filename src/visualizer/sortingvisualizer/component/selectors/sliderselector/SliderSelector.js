import React, { useContext, useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';

const SliderSelector = ({ setData, min, max, name }) => {
  const { isPlay } = useContext(VisualizerStateContext);
  const [sliderData, setSliderData] = useState(Math.floor((min + max) / 2));

  return (
    <div className="selector-holder">
      <span>
        {name}: {sliderData}
      </span>
      <Slider
        defaultValue={Math.floor((min + max) / 2)}
        min={min}
        max={max}
        onChange={(val) => setSliderData(val)}
        onAfterChange={() => setData(sliderData)}
        disabled={isPlay}
      />
    </div>
  );
};

export default SliderSelector;
