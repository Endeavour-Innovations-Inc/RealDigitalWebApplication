var randomBinary = require('random-binary');
const { performance } = require('perf_hooks');
const { systemPreferences } = require('electron');
// randomBinary(4); or 8 or 16 bits to generate different binary number 
// with different number of bits

mode = false; // true for continuous, false for "run once" mode
// need to config how to tie it to the button

var array = [];
for (let j = 0; j < 100; j++) { // for loop to populate the array to simulate the data block
    number = parseInt(randomBinary(12), 2); // 12 bit binary value
    if (number > 1760) { // testing out the frequency input 
        ;
    } else if (number <= 1760) {
        array.push(number); // 12 bit binary value
    }
}
    
i = 0;
var startTime = performance.now()
while (i < 100) { // will be replace with data listener module
    if (mode == true) {
        console.log(parseInt(randomBinary(4), 2));  
        i++;
    } else if (mode == false) {
        console.log(array.pop());
        if (!array.length) {
            break; // allows to exit while loop
        }
    }
}
var endTime = performance.now();
console.log(`took ${endTime - startTime} milliseconds`);
