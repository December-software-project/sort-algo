import React from 'react';

export const highlightNumber = (value, numberToHighlight) => {
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
  return numberMapping.map((x) => <span style={{ fontWeight: x[1] && 750 }}>{x[0]}</span>);
};

export const highlightOnesPlacing = (value) => {
  let stringArray = Array.from(value.toString());
  return stringArray.map((x) => {
    return <span>{x}</span>;
  });
};
