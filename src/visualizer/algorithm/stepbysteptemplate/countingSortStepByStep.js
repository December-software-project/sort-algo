export const countingSortStepByStep = (animationArr, idx, referenceArray) => {
  const height = animationArr[idx - 1].height;

  if (idx > referenceArray.length) {
    return `Restore element ${height} and decrease count of ${height} by 1`;
  } else {
    return `Increase count of ${animationArr[idx - 1].height} by 1`;
  }
};
