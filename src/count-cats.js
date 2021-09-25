import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(mtx) {
  let count = 0;
  let m,n;

  m = mtx.length;
  if (m > 0) {
    n = mtx[0].length;
  } else {
    return 0;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mtx[i][j] == '^^') count++;
    }
  }
  return count;
}
