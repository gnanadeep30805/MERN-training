var random = Math.random();
console.log("Random number between 0 and 1: " + random);

var multiplied = random * 100;
console.log("Random number between 0 and 100: " + multiplied);

var floored = Math.floor(multiplied);
console.log("Random number between 0 and 100 (rounded down): " + floored);

var finalNum = floored + 1;
console.log("Final number between 1 and 100: " + finalNum);