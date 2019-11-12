/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 *
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 **/


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = address.split('');

    for (let i = 0; i < result.length -1; i++) {
        if (result[i] === '.') {
            result[i] = '[.]';
        }
    }
    return result.join('');
};