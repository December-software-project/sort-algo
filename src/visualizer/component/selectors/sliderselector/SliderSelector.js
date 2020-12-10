import React, { useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import './styles.css';

const SliderSelector = ({ setData, min, max, name, isPlay }) => {
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
        onChange={(val) => {
          setSliderData(val);
          setData(val);
        }}
        disabled={isPlay}
      />
    </div>
  );
};

export default SliderSelector;
