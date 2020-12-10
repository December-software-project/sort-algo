import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

const VisualizerHeader = () => {
  const VisualizerStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const VisualizerLineStyling = (isVisible) => ({
    transform: isVisible ? `translateX(25px)` : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <div className="visualizer-header" ref={nodeRef}>
      <span style={VisualizerStyling(isVisible)}>Visualizer</span>
      <div className="visualizer-header-line" style={VisualizerLineStyling(isVisible)} />
    </div>
  );
};

export default VisualizerHeader;
