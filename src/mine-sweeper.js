const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let count = 0
  return matrix.map((row, indexRow) => {
    return row.map((value, indexColumn, rowArray) => {
      count=0
      if (rowArray.length != indexColumn + 1 && matrix[indexRow][indexColumn + 1] === true) count++
      if (indexColumn!=0 && matrix[indexRow][indexColumn - 1] === true) count++
      if (indexRow!=matrix.length-1 && matrix[indexRow + 1][indexColumn] === true) count++
      if (indexRow!=0 && matrix[indexRow - 1][indexColumn] === true) count++
      if (indexRow!=matrix.length-1 && rowArray.length != indexColumn + 1 && matrix[indexRow + 1][indexColumn + 1] === true) count++
      if (indexRow!=matrix.length-1 && indexColumn!=0 && matrix[indexRow + 1][indexColumn - 1] === true) count++
      if (indexRow!=0 && rowArray.length != indexColumn + 1 && matrix[indexRow - 1][indexColumn + 1] === true) count++
      if (indexRow!=0 && indexColumn!=0 && matrix[indexRow - 1][indexColumn - 1] === true) count++
      return count
    })
  })
}

module.exports = {
  minesweeper
};
