var randomBinary = require('random-binary');
// randomBinary(4); or 8 or 16 bits to generate different binary number 
// with different number of bits
i = 0;
while (i<10) {
    // generates 4 bit numbers
    // parseInt(x, 2) converts any binary number to decimal 
    console.log(parseInt(randomBinary(4), 2));  
    i++;
}