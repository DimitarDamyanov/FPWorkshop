const R = require('ramda');

const add = R.curry((a, b) => a + b);
const multiply = R.curry((a, b) => a * b);
const divide = R.curry((divisor , dividend) => dividend / divisor);

/**
    You should implement four functions which are resolving math expressions. You have the permission to use only the add, multiply, divide, R.compose, R.pipe and R.curry or to to create new "helper" functions which are using the permitted functions.

    1. Extend the "formula" function to resolve (a + 5) * 2.  Example formula(5) should return 10.
    2. Extend the "formula2" function to resolve (a + b) * 2. Example formula2(1,5) should return 12.
    3. Extend  the "formula3"  function to resolve (a + b)  * c. The input parameters order should be in order -  c, b, a. Example formula3(3, 2, 1) should return 9.
    4. Extend the "formula4" function to resolve ((a + b) * c) / d. The input parameters order should be in order - a. b, c, d. Example formula4(1, 3, 2, 4) should be 2.
    5. Modify "formula4" to use "formula3".
    7. Modify "formula2" to use "formula3"
    8. Modify "formula" to use "formula 3"

    All tests should be green!
 */

const formula4 = () => {};
const formula3 = () => {};
const formula2 = () => {};
const formula = () => {};

export { formula, formula2, formula3, formula4 }