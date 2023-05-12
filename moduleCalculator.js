const { log } = require('console');
var calculator = require('./module/calculator');

var a = 10, b = 5;

log('Addition: ' + calculator.add(a, b));
log('Subtraction: ' + calculator.subtract(a, b));
log('Multiplication: ' + calculator.multiply(a, b));