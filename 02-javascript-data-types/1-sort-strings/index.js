/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const locales = ['ru', 'en'];
  const options = {
    caseFirst: 'upper'
  };

  return [...arr].sort((a, b) => {
    if (param === 'desc') {
      return String(b).localeCompare(String(a), locales, options);
    }

    return String(a).localeCompare(String(b), locales, options);
  });
}
