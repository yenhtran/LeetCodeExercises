/**
 * 2. Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(string) {
  const hash = {};
  const chars = string.replace(/[.,'"!?]/g, '').toLowerCase().split(' ');

  for (let i = 0; i < chars.length; i++) {
    if (hash[chars[i]] === undefined) {
      hash[chars[i]] = 1;
    } else {
      hash[chars[i]]++;
    }
  }
  return hash;
}

console.log(wordCount('The cat and the hat.'));
console.log(wordCount('As soon as possible.'));
console.log(wordCount(`It's a man, it's a plane, it's superman!`));