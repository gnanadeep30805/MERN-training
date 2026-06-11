const calculator = require("./Calculator");
const logger = require("./logger");
logger.logInfo("Application Started ");

let a = 20;
let b = 10;
console.log ("Add: ",calculator.add(a,b));
console.log ("Sub: ",calculator.sub(a,b));
console.log ("Mul: ",calculator.mul(a,b));
console.log ("Div: ",calculator.div(a,b));
logger.logInfo("Application Finished");