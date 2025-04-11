// In JS, semicolons are inferred when possible, so they usually are not necessary
// Sometimes though, they are crucial

function doSomething() { }
let letters = 'abcd', a = 'a'

// /* Comment/uncomment this line to enable the correct version
doSomething()   // ; necessary
[a] = letters   // Interpreted as: doSomething()[b] = a
/*/
doSomething();
[a] = letters
// */
console.log({ letters, a })

// Since [] mark an accessor to a previous token, JS does not know this is actually intended to be a new statement/expression
// The same could happen for anything grouped with parenthesis being recognized as a function call

// In this instance, the faulty code causes an error due to doSomething not having a return value
// But this could easily access some variable's property identifier and corrupt data
