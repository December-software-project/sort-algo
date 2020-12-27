/**
 * Generates a translation in the x direction to shift the animation screen when the data size
 * is more than 12.
 *
 * @method
 * @category VisualizerUtil
 * @param {number} dataSize Data size.
 * @returns {number} Translation in the x direction when the data size is more than 12.
 */
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};
