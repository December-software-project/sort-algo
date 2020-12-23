export const radixSortStepByStep = (animationArr, idx) => {
  const currentElement = animationArr[idx - 1];
  const height = currentElement.height;
  const location = currentElement.location;
  if (currentElement.isDistributing) {
    return `Put element ${height} at the end of bucket ${location}`;
  } else {
    return `Restore the first element (${height}) in bucket ${location} back to array`;
  }
};
