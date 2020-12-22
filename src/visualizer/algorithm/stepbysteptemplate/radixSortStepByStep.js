export const radixSortStepByStep = (animationArr, idx) => {
  const current = animationArr[idx - 1];
  const height = current.height;
  const location = current.location;
  if (current.isDistributing) {
    return `Put element ${height} in bucket ${location}`;
  } else {
    return `Restore element ${height} back to array`;
  }
};
