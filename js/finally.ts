// finally always runs, and overrides return/throw from try/catch if it has any

function test() {
    try {
        return 1
    } catch (_error) {
        return 2
    } finally {
        return 3    
        // It is generally discouraged to use `return/throw` within a finally block
        // Some language servers will highlight this to warn of its behavior
    }
}
console.log(test()) // 3

// The same behavior occurs in Java, C#, Python, and Ruby — a return/throw in finally overrides any previous one.
