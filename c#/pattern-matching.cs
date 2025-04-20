class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}

// Consider the following condition:
if (person != null && 
    person.Age > 18 && 
    person.Name.Length > 3) {}

// In C#, we can use pattern matching to simplify this to:
if (person is { Age: > 18, Name.Length: > 3 }) {}


// // switch/case can also use pattern matching:
string result = person switch {
    { Age: > 18, Name.Length: > 3 } => "Valid",
    null => "Null object",
    _ => "Does not meet criteria" // discard (default)
};
// Type patterns
void Describe(object input) {
    switch (input) {
        case int i:
            Console.WriteLine($"Integer: {i}");
            break;
        case string s when s.Length > 3:
            Console.WriteLine($"Long string: {s}");
            break;
        case null:
            Console.WriteLine("Null");
            break;
        default:
            Console.WriteLine("Something else");
            break;
    }
}


// Pattern-matching is also included in Rust, Scala, Python, and Swift
// They're also proposed in TypeScript
