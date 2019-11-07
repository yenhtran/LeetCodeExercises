/**
 * Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
**/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const result = [];
  const numArray = x.toString().split('');
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] !== 0) {
        result.unshift(numArray[i]);
    }
  }
  return result.join('');
};