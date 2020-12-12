import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

const TeamHeader = () => {
  const TeamStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const TeamLineStyling = (isVisible) => ({
    transform: isVisible ? `translateX(13px)` : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <div className="team-header" ref={nodeRef}>
      <span style={TeamStyling(isVisible)}>Team</span>
      <div className="team-header-line" style={TeamLineStyling(isVisible)} />
    </div>
  );
};

export default TeamHeader;
