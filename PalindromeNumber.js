/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 * Input: 121
 * Output: true
 *
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 **/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numArray = x.toString().split('');

  for (let i = 0, j = numArray.length -1; i <= j; i++, j--) {
    if (numArray[i] !== numArray[j]){
      return false;
    }
  }
  return true;
}