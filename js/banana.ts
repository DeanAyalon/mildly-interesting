// This one is well known
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()) // banana

// + is used for many things: string concatenation, number addition, and unary number conversion
// First, JS concatenates 'b' + 'a' into 'ba'
// Then, it tries doing the following: 'ba' + (+'a')
// +'a' tries converting 'a' to a number, resulting in 'NaN' (Not a Number)
// When ('b' + 'a' + (+'a') + 'a') is evaluated, it results in 'baNaNa'
// Finally, .toLowerCase() is called and we get a 'banana'
