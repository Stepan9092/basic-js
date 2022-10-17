const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason( date ) {
  
  if(!date) return 'Unable to determine the time of year!'
  if(!(date instanceof Date)) throw Error('Invalid date!')
  if(Object.getOwnPropertyNames(date).length !== 0)  throw Error('Invalid date!')

  let month = date.getMonth()
  let result 
  if(month<=1 || month==11){ result = 'winter'}
  if(month>=2 && month<=4){ result = 'spring'}
  if(month>=5 && month<=7){ result = 'summer'}
  if(month>=8 && month<=10){ result = 'autumn'}
  return result 
}

module.exports = {
  getSeason
};
