export const radixSortStepByStep = (animationArr, idx) => {
  const currentAnimation = animationArr[idx - 1];
  const height = currentAnimation.height;
  const location = currentAnimation.location;

  if (currentAnimation.isDistributing) {
    return `Put element ${height} at the end of bucket ${location}`;
  } else {
    return `Restore the first element (${height}) in bucket ${location} back to array`;
  }
};
