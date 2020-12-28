import React from 'react';

/**
 * Retrieves the current digit to highlight.
 *
 * @category HighlightUtil
 * @param {number} idx Index of the current animation.
 * @param {number} dataSize Size of data array.
 * @returns {number} Digit to highlight.
 */
const getDigitToHighlight = (idx, dataSize) => {
  if (idx < 2 * dataSize) {
    return 1;
  } else if (idx < 4 * dataSize) {
    return 2;
  } else if (idx < 6 * dataSize) {
    return 3;
  } else {
    // No highlight case
    return -1;
  }
};

/**
 * Highlights a digit in the value based on the current stage of the animation.
 *
 * @method
 * @category HighlightUtil
 * @param {number} value Value of element.
 * @param {number} idx Current index of the animation.
 * @param {number} dataSize Size of data selected.
 * @returns {JSX.Element[]} Array of digits.
 */
export const highlightDigit = (value, idx, dataSize) => {
  const currentHighlighted = getDigitToHighlight(idx, dataSize);
  let current = 0;
  let index = 1;
  let numberMapping = [];
  while (value > 0) {
    current = value % 10;
    numberMapping.push([current, currentHighlighted === index]);
    index++;
    value = Math.floor(value / 10);
  }
  return numberMapping.map((x) => (
    <span style={{ fontWeight: x[1] && `bold`, color: x[1] && `#fff` }}>{x[0]}</span>
  ));
};

/**
 * Spreads the number into spans of digits.
 *
 * @method
 * @category HighlightUtil
 * @param {number} value Number to spread.
 * @returns {JSX.Element[]} Array of digits.
 */
export const spreadNumber = (value) => {
  let stringArray = Array.from(value.toString());
  return stringArray.map((x) => <span>{x}</span>);
};
