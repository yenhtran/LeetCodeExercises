/**
 * Unique
 * Given an array of integers, return an array with all duplicates removed.
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
`[1, 2, 3, 4, 5, 6] --> [1, 2, 3, 4, 5, 6]`
`[1, 1, 2, 2, 3, 3]' --> []`
`[1, 2, 3, 1, 2] --> [3]`
 */

function uniqueArray(array) {
  const count = {};
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (count[array[i]] === undefined) {
      count[array[i]] = 1;
    } else {
      count[array[i]]++;
    }
  }

  for (let key in count) {
    if (count[key] <= 1) {
      result.push(key);
    }
  }
}
uniqueArray([1, 2, 3, 4, 5, 6]);
uniqueArray([1, 1, 2, 2, 3, 3]);
uniqueArray([1, 2, 3, 1, 2]);