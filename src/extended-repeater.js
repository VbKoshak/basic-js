import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  let additionalText;
  let result;

  if (repeatTimes == undefined) repeatTimes = 1;
  if (additionRepeatTimes == undefined) additionRepeatTimes = 1;

  let arr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arr.push(addition === undefined ? "" : "" + addition);
  }
  additionalText = arr.join(additionSeparator ? additionSeparator : "|");

  if (typeof repeatTimes == "number" && repeatTimes > 0) {
    let arr = [];
    for (let i = 0; i < repeatTimes; i++) {
      arr.push(str + (additionalText === undefined ? "" : additionalText));
    }
    result = arr.join(separator ? separator : "+");
  }
  return result;
}
