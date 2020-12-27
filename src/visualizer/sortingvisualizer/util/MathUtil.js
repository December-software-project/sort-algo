/**
 * Generates a random number within [min, max].
 *
 * @method
 * @category MathUtil
 * @param {number} min Min number selected.
 * @param {number} max Max number selected.
 * @returns {number} Random number generated.
 */
export const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Rounds the number to 2 decimal places, if necessary.
 *
 * @method
 * @category MathUtil
 * @see {@link https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary|Stack Overflow}
 * @param {number} num Input number.
 * @returns {number} Rounded number with maximum 2 decimal places.
 */
export const roundToTwoDp = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};
