import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

export default class DepthCalculator {
  calculateDepth( arr ) {
    if (Array.isArray(arr)) {
      let maxInnerDeep = 0;
      arr.forEach(i => {
        let recRes = this.calculateDepth(i);
        maxInnerDeep = recRes > maxInnerDeep ? recRes : maxInnerDeep;
      })
      return maxInnerDeep + 1;
    } else {
      return 0;
    }
  }
}
