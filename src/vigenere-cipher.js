const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(direct=true){
    this.isDirect=direct
    this.alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  }

  encrypt(str, key) {
    if(str===undefined || key===undefined) throw Error ('Incorrect arguments!')
    key=key.toLowerCase().split('')
    let countOfSymbols = 0
    let result = str.toLowerCase().split('').map((el,index)=>{
      if(this.alphabet.includes(el)){
        let numberStr=this.alphabet.indexOf(el)
        let numberKey=this.alphabet.indexOf(key[(index-countOfSymbols)%key.length])
        let sum=(numberKey+numberStr)%this.alphabet.length
        return this.alphabet[sum]
      }
      else countOfSymbols++
      return el;
    })
    result = result.join('').toUpperCase()
    return this.isDirect?result:result.split('').reverse().join('')
  }

  decrypt(str, key) {
    if(str===undefined || key===undefined) throw Error ('Incorrect arguments!')
    key=key.toLowerCase().split('')
    let countOfSymbols = 0
    let result = str.toLowerCase().split('').map((el,index)=>{
      if(this.alphabet.includes(el)){
        let numberStr=this.alphabet.indexOf(el)
        let numberKey=this.alphabet.indexOf(key[(index-countOfSymbols)%key.length])
        let diff = numberStr-numberKey
        if(diff<0) diff=diff+26
        return this.alphabet[diff]
      }
      else countOfSymbols++
      return el;
    })
    result = result.join('').toUpperCase()
    return this.isDirect?result:result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
