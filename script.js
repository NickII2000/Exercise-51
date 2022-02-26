'use strict';
const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(3, 15);
calcOrDouble(3);