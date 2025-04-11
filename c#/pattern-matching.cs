class Person {
    public int Age { get; set; }
    public string Name { get; set; }
}

// Consider the following condition:
if (person != null && 
    person.Age > 18 && 
    person.Name.Length > 3) {}

// In C#, we can use pattern matching to simplify this to:
if (person is { Age: > 18, Name.Length: > 3 }) {}
