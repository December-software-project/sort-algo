import React from 'react';
import './styles.css';

import { MdCopyright } from 'react-icons/md';

/**
 * Footer at the end of page.
 */
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="triangle" />
      <div className="links-container">
        <div className="footer-title">About Us</div>
        <a href="#home">Home</a>
        <a href="#howItWorks">How It Works</a>
        <a href="#visualizer">Visualizer</a>
        <a href="#team">Team</a>
        <a href="#contactUs">Contact Us</a>
        <div className="copy-right">
          Copyright <MdCopyright size={18} color={'white'} /> 2020 SortAlgo.
        </div>
      </div>
    </div>
  );
};

export default Footer;
