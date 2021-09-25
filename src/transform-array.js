import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = [];
  let discard = false;
  let double = false;

  arr.forEach((el, index) => {
    if (typeof el == "number") {
      discard ? newArr.push(null) : newArr.push(el);
      double ? newArr.push(el) : "";
      discard = false;
      double = false;
    } else if (typeof el == "string"){
      discard = false;
      double = false;
      switch (el) {
        case '--discard-next':
          newArr.push(null);
          discard = true;
          break;
        case '--discard-prev':
          newArr.push(null);
          if (newArr[index - 1] && typeof newArr[index - 1] != null) {
            newArr[index - 1] = null;
          }
          break;
        case '--double-next':
          double = true;
          break;
        case '--double-prev':
          if (newArr[index - 1] && newArr[index - 1] != null) {
            newArr.push(arr[index - 1]);
          }
          break;
        default:
          newArr.push(el);
      }
    } else {
      newArr.push(el);
    }
  }) 

  return newArr.filter(el => !(el == null))
}
