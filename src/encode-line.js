const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result
  let count = 1
  result = str.split('').reduce((value, current, index , array)=>{
    if(current===array[index+1]){
      count++
      return value
    }
    else {
      let temp=count++
      count=1
      return value+temp+current
    }
  },'0')
  result=result.split('')
  result.shift()
  return result.filter((el)=>el!='1').join('')
}

module.exports = {
  encodeLine
};
