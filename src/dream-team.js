import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  let filteredMembers = members.filter(el => (typeof el) == 'string');
  filteredMembers = filteredMembers.forEach(el => el.trim());
  filteredMembers.sort();
  let result = "";
  filteredMembers.forEach(el => result = result + el[0]);
  return result;
  // remove line with error and write your code here
}
