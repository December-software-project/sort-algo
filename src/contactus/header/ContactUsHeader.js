import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

const ContactUsHeader = () => {
  const ContactUsStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const ContactUsLineStyling = (isVisible) => ({
    transform: isVisible ? `translateX(23px)` : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <div className="contact-us-header" ref={nodeRef}>
      <span style={ContactUsStyling(isVisible)}>Contact Us</span>
      <div className="contact-us-header-line" style={ContactUsLineStyling(isVisible)} />
    </div>
  );
};

export default ContactUsHeader;
