import React, { useState, useEffect, useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';

const StepByStep = () => {
  // const { text } = useContext(VisualizerStateContext);
  // const [textToDisplay, setTextToDisplay] = useState('');
  // useEffect(() => setTextToDisplay(text), [text]);

  return <div className="step-by-step-holder">{/*<p>{textToDisplay}</p>*/}</div>;
};

export default StepByStep;
