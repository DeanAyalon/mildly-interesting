// In JS, semicolons are inferred when possible, so they usually aren't necessary
// Sometimes though, they are crucial - especially when a line begins with `[`, `(`, `/`, or `+`/`-`.

const letters = 'abcd', something = { a: 'init' }
let a = 'A', obj = {}

/* Comment/uncomment this line to enable the correct version
obj = something     // ; necessary, it is not inferred
[a] = letters       // Interpreted as: something[b] = a
/*/
obj = something;    // { a: 'init' }
[a] = letters       // Destructure: a = letters[0]     'a'
// */

console.log({ letters, a, obj, something })
// Faulty behavior:     { letters: 'abcd', a: 'A', obj: 'abcd', something: { a: 'init', A: 'abcd' } }
// Intended  behavior:  { letters: 'abcd', a: 'a', obj: { a: 'init' }, something: { a: 'init' } }

// The faulty code here results in both `something.A` and `obj` being set to letters ('abcd')
// Instead of setting `obj` to `something`, and `a` to `letters[0]` ('a')


// ---- EXPLANATION ----
// Since [] mark an accessor to a previous token, when a line starts with it, JS assumes it is a continuation of the previous line
// The same could happen for:
// - `()`       Anything grouped with parenthesis being recognized as a function call
// - `/`        Regex literal
// - `+`/`-`    Unary operators
