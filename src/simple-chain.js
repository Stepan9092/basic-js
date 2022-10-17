const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  value:[],
  getLength() {
    return this.value.length
  },
  addLink(value) {
    this.value.push(`${value}`)
    return this
  },
  removeLink(position) {
    if(typeof position!='number' || this.value[`${position-1}`]===undefined)
    {
      this.value=[]
      throw new Error(`You can't remove incorrect link!`)
    } 
    this.value.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.value.reverse()
    return this
  },
  finishChain() {
    let temp = '( '+this.value.join(' )~~( ').concat(' )')
    this.value = []
    return temp
  }

}

module.exports = {
  chainMaker
};
