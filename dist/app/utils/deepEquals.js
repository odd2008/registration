'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepEquals = function deepEquals(first, second) {

  /*
   * First, let’s check whether the 2 values are both primitive types
   * If they are both primitive types, then we can just use the “===” operator
   * to determine whether they are deeply equal to each other.
   * The isPrimitive function is a helper function I defined below to help us out.
   */
  if (isPrimitive(first) && isPrimitive(second)) {
    // If this part of the code is reached, it means that both values are primitive types.
    // In that case, we can simply use our “===” operator to test for deep equality.
    return first === second;
  }

  /*
   * Second, if we reach this part of the code, it means that either:
   * 1) One of the values is a primitive type while the other one isn’t, or
   * 2) Both values are reference types
   * The else—if code directly below will test for the (1) scenario
   */
  else if (isPrimitive(first) || isPrimitive(second)) {
      // If the 2 values aren’t even the same types, then we can just return false.
      return false;
    }

    /*
     * Finally, if we reach this part of the code, then we know that we’re in the
     * (2) scenario mentioned above where we are dealing with 2 reference values.
     */
    else {

        // Since we know that both values are reference types,
        // we can get the keys for each of the objects and compare their keys array.
        var firstKeys = Object.keys(first);
        var secondKeys = Object.keys(second);

        // Given these 2 keys arrays, we know that if they don’t even have the
        // same lengths, then they must not be deeply equal.
        if (firstKeys.length !== secondKeys.length) {
          return false;
        }

        // At this point, we know that these 2 values have keys arrays that have the same length
        // We now want to check whether for EACH of the keys, both objects have the same corresponding values.
        else {
            for (var prop in first) {

              // We know both keys arrays have the same length,
              // but do they have the same keys in both arrays? This test checks for that.
              if (second[prop] === undefined) {
                // If we can’t the same key in both objects,
                // then we know the two objects are not deeply equal.
                return false;
              }

              // At this point, we see that both objects have the same particular
              // key but are there corresponding values deeply equal?
              // If we determine that for this particular key, the 2 object’s corresponding
              // values are not deeply equal, then we know that the 2 object’s are also not deeply equal.
              else if (!deepEquals(first[prop], second[prop])) {
                  return false;
                }
            }

            // If the code reaches this point, then we know we’ve gone through all the key / value pairs
            return true;
          }
      }
};

// Helper function to determine whether a JavaScript value is a primitive type
var isPrimitive = function isPrimitive(value) {
  return value === void 0 || value === null || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string';
};

exports.default = deepEquals;