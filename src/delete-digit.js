const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newMas, number

  return n.toString().split('').reduce((prev,next, index, array)=>{
   newMas = array.slice()
   newMas.splice(index,1)
   number = +newMas.join('')
   return prev<number?number:prev
 },0)
}

module.exports = {
  deleteDigit
};
