// TODO: Implement these functions
// Look at what's available on Array and Object to help you.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

/**
 ** This method returns the first argument it receives.
 **/
export const identity = value => value;

/**
 * Iterate over an input object, calling a provided function callback for each key and value in the object.
 **/
export function forEachObjIndexed(object, callback) {
  for (let key in object) {
    callback(object[key], key);
  }
}

/**
 * Creates an array of own enumerable string keyed-value pairs for object
 */
export const entries = object =>
  Object.keys(object).map(key => [key, object[key]]);

/**
 * Creates a new object where every value is mapped using callback
 */
export function map(collection, callback) {
  let array = [];
  collection.forEach((val, index, arr) => {
    array = [...array, callback(val, index, arr)];
  });
  return array;
}

/**
 * This method is like _.find except that it returns the key of the first element predicate returns truthy for instead
 * of the element itself.
 */
export function findKey(object, predicate) {
  if (typeof predicate === 'function') {
    for (let key in object) {
      if (predicate(object[key])) return key;
    }
  } else {
    for (let key in object) {
      if (JSON.stringify(object[key]) === JSON.stringify(predicate)) return key;
    }
  }
}

/**
 * Flattens array a single level deep.
 */
export const flatten = array => array.reduce((acc, val) => acc.concat(val), []);

/**
 * Recursively flattens array.
 */
export const flattenDeep = array =>
  array.reduce(
    (acc, val) =>
      Array.isArray(val) ? [...acc, ...flattenDeep(val)] : [...acc, val],
    []
  );

/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 */
export const compact = array => array.filter(element => !!element);

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk
 * will be the remaining elements.
 */
export const chunk = (array, size = 1) =>
  Array.isArray(array)
    ? array.reduce(
        (acc, val, idx) =>
          idx % size === 0 ? [...acc, array.slice(idx, idx + size)] : acc,
        []
      )
    : [];

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second
 * of which contains the second elements of the given arrays, and so on.
 */
export function zip(...arrays) {
  const filteredArrays = arrays.filter(Array.isArray);
  const length = Math.max(...filteredArrays.map(arr => arr.length));
  return Array.from({length}, (value, index) =>
    filteredArrays.map(
      array => (array.length - 1 >= index ? array[index] : undefined)
    )
  );
}

/**
 * This method accepts two arrays, one of property identifiers and one of corresponding values
 */
export function zipObject(props, values) {
  const obj = {};
  props.map((val, index) => (obj[val] = values[index]));
  return obj;
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee
 */
export function groupBy(collection, iteratee) {
  const obj = {};
  collection.map(item => {
    obj[iteratee(item)] = obj[iteratee(item)]
      ? [...obj[iteratee(item)], item]
      : [item];
  });
  return obj;
}

/**
 * Creates a duplicate-free version of an array
 */
export const uniq = collection =>
  collection.reduce(
    (acc, val) => (acc.includes(val) ? acc : acc.concat(val)),
    []
  );

/**
 * Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing
 * the result based on the arguments provided to the memoized function. By default, the first argument provided to the
 * memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.
 */
export function memoize(fn) {
  const map = new Map();

  return function(key) {
    if (map.has(key)) {
      return map.get(key);
    }
    map.set(key, fn(...arguments));
    return map.get(key);
  };
}
