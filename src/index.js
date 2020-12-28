import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

/**
 * Listener to show current navigation window/menu.
 */
window.addEventListener('scroll', (event) => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY + 60 + window.innerHeight * 0.05;
  let navigationMenu = document.querySelector('nav');
  let menuHeaders = document.querySelectorAll('nav div a div');

  // Header transits to the next state when scrollY > 0 (upon scrolling from the top)
  navigationMenu.classList.toggle('sticky', window.scrollY > 0);
  menuHeaders.forEach((link) => {
    link.classList.toggle('sticky', window.scrollY > 0);
  });

  navigationLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
