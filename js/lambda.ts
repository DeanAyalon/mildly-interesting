// Lambda (Arrow) functions do not have their own `this` context, therefore, they inherit it from the surrounding scope
// Regular functions have their own dynamic `this`, which is determined based on how they're called

// Consider the following code:
const me = {
    name: 'Dean Ayalon',
    talk: () => console.log(this)           // this -> global window object
}, you = {
    name: 'John Doe',
    talk: function () { console.log(this) }  // this -> `you` object (the context in which the function is called)
}

me.talk()   // `this` Inherited from the global window                  prints {} or undefined depending on the JS engine
                                                                            // node: {}, deno: undefined
you.talk()  // Calling you.talk() sets `this` to the `you` object       prints { name: 'John Doe', talk: [Function: talk] }

// The lambda function was defined in the global content (the JS window) and then assigned to `me` - `this` points to the window object
// Meanwhile, the `you.talk()` method was called by `you` - `this` points to the `you` object
