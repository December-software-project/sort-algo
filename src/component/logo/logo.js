import React from 'react';
import './styles.css';

/**
 * Sort-Algo logo used in Navigation Menu.
 *
 * @component
 * @category Navigation Menu
 */
const Logo = () => {
  return (
    <a href="#home" className="logo">
      <div className="logo-block-one" />
      <div className="logo-block-two" />
      <div className="logo-block-three" />
    </a>
  );
};

export default Logo;
