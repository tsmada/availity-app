/**
 * @param {string} s
 * @return {boolean}
 */
const evaluate = (expression) => {
    if ( !expression || expression === undefined || expression.length === 1) {
      return false;
    }

    let subArray = expression.split('');
    var stack = [];

    for (let char of subArray) {
        if (char === '(') {
          stack.push(')');
        } else if (stack.length === 0 || char !== stack.pop())
        { 
          return false;
        }
    }
    if (stack.length === 0) return true;
    return false;
};

const expr = '(((()))))'

console.log(evaluate(expr));
