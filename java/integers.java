// In Java, integers between -128 and 127 are cached (Int8)
// So when creating two Int8 variables of the same value, Java reuses the same Integer object
    
Integer a = 10;
Integer b = 10;
System.out.println(a == b);         // true - both reference the same Integer object (10)
System.out.println(a.equals(b));    // true - both are 10

// Integers outside the 1 Byte range are handed their own Integer object
Integer c = 1000;
Integer d = 1000;
System.out.println(c == d);         // false - each point to their own Integer objects
System.out.println(c.equals(d));    // true - both are 1000

// == is used for identity comparison, not numeric




/exit   // For jshell



// The same happens in:
//  Python - for integers between -5 and 256 (Range chosen arbitrarily by common usage)
//  Ruby - `==` compares value, while `.equals?()` compares identity - opposite to Java!
