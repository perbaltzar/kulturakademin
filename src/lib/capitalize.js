/**
 * Return string with capitalized first letter
 * @param  {string} string
 */
const capitalize = string => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export default capitalize;
