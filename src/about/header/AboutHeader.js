import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

const AboutHeader = () => {
  const VisualizerStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const AboutLineStyling = (isVisible) => ({
    transform: isVisible ? `translateX(15px)` : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <div className="about-header" ref={nodeRef}>
      <span style={VisualizerStyling(isVisible)}>About</span>
      <div className="about-header-line" style={AboutLineStyling(isVisible)} />
    </div>
  );
};

export default AboutHeader;
