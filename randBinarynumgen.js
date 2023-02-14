var randomBinary = require('random-binary');
const { performance } = require('perf_hooks');
// randomBinary(4); or 8 or 16 bits to generate different binary number 
// with different number of bits
i = 0;

var startTime = performance.now()
while (i<10) {
    // generates 4 bit numbers
    // parseInt(x, 2) converts any binary number to decimal 
    console.log(parseInt(randomBinary(4), 2));  
    i++;
}
var endTime = performance.now()
console.log(`took ${endTime - startTime} milliseconds`)