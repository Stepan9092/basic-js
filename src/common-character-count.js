const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  s2=s2.split('')
  return s1.split('').reduce((value, el)=>{
    let findIndex = s2.indexOf(el)
    if(el==s2[findIndex]){
      s2.splice(findIndex,1)
      value++
    }
    return value
   }, 0)
}

module.exports = {
  getCommonCharacterCount
};
