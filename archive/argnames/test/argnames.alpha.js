/**
 * Get the keys of the paramaters of a function.
 *
 * @param {function} method  Function to get parameter keys for
 * @return {array}
 */
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
const ARGUMENT_NAMES = /(?:^|,)\s*([^\s,=]+)/g
export function argNamesAlpha(func) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '')
  const argsList = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
  const result = argsList.match(ARGUMENT_NAMES)
  if (result === null) {
    return []
  } else {
    const stripped = []
    for (let i = 0; i < result.length; i++) {
      stripped.push(result[i].replace(/[\s,]/g, ''))
    }
    return stripped
  }
}