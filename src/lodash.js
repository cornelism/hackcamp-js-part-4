// TODO: Implement these functions
// Look at what's available on Array and Object to help you.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

/**
 ** This method returns the first argument it receives.
 **/
export function identity(value) {}

/**
 * Iterate over an input object, calling a provided function callback for each key and value in the object.
 **/
export function forEachObjIndexed(object, callback) {}

/**
 * Creates an array of own enumerable string keyed-value pairs for object
 */
export function entries(object) {}

/**
 * Creates a new object where every value is mapped using callback
 */
export function map(collection, callback) {}

/**
 * This method is like _.find except that it returns the key of the first element predicate returns truthy for instead
 * of the element itself.
 */
export function findKey(object, predicate) {}

/**
 * Flattens array a single level deep.
 */
export function flatten(array) {}

/**
 * Recursively flattens array.
 */
export function flattenDeep(array) {}

/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 */
export function compact(array) {}

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk
 * will be the remaining elements.
 */
export function chunk(array, size = 1) {}

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second
 * of which contains the second elements of the given arrays, and so on.
 */
export function zip(...arrays) {}

/**
 * This method accepts two arrays, one of property identifiers and one of property identifiers and one of corresponding values
 */
export function zipObject(props, values) {}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee
 */
export function groupBy(collection, iteratee) {}

/**
 * Creates a duplicate-free version of an array
 */
export function uniq(collection) {}

/**
 * Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing
 * the result based on the arguments provided to the memoized function. By default, the first argument provided to the
 * memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.
 */
export function memoize(fn) {}
