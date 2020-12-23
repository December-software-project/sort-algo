import React from 'react';

export const getDisplayNumber = (value, numberToHighlight) => {
  const currentHighlighted = numberToHighlight;
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
    <span style={{ color: x[1] && '#3443be', fontWeight: x[1] && 'bold' }}>{x[0]}</span>
  ));
};