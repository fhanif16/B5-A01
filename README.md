What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enums in TypeScript allow us to create a set of named constants, making our code more readable and easier to manage. They provide a way to represent related values with descriptive names instead of using hard-to-remember numbers or strings. Enums can use both numeric and string values, depending on what's more appropriate for the context.

Key Benefits:
Easy-to-remember names: Replace numbers or strings with descriptive, meaningful names.

Group-related values: Keep similar values organized under one name for better structure and readability.

Types of Enums in TypeScript:
1. Numeric Enums
By default, enums in TypeScript use numbers. The first value is assigned 0, and each subsequent value auto-increments by 1, though you can customize the starting value or specific values if needed.

Example:

typescript
Copy code
enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}

let status: HttpStatusCode = HttpStatusCode.NotFound;
console.log(status);  // Output: 404
Explanation:

HttpStatusCode is a numeric enum where each member represents a common HTTP status code.

We explicitly assign numeric values like 200 for OK, 400 for BadRequest, and so on.

Logging HttpStatusCode.NotFound outputs 404, the numeric value we assigned.

Numeric enums are great for handling sequences or specific values like HTTP status codes.

2. String Enums
String enums allow us to assign string values to each member, making them more descriptive and self-explanatory.

Example:

typescript
Copy code
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;
console.log(move);  // Output: "UP"
Explanation:

Each member of the Direction enum is assigned a string value, making it easy to understand the direction the enum represents.

Logging Direction.Up outputs "UP", which is the assigned string value.

Conclusion:
Enums in TypeScript are a great way to improve code readability and organization. Numeric enums are ideal for representing sequences or standard values, like HTTP status codes, while string enums are useful for descriptive values that enhance clarity in the code.

How TypeScript Improves Code Quality and Project Maintainability
TypeScript improves code quality by checking for errors while you're still writing the code, helping catch mistakes early in the development process. It makes the code easier to understand by requiring you to define the types of the variables and functions, whether they are numbers, strings, or more complex structures.

TypeScript also supports powerful features like interfaces and enums, which help organize your code and ensure consistency, especially in large projects. If there’s a mistake, TypeScript provides clear error messages, making it easier to spot and fix issues.

This means that with TypeScript, your code is less likely to break, and it becomes much easier to maintain and extend over time.

Example of TypeScript Error Catching:
typescript
Copy code
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, "10");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'
Explanation:

The add function expects both parameters a and b to be numbers and will return a number.

When we try to call add(5, "10"), TypeScript immediately catches the error because "10" is a string, not a number.

Without TypeScript, this error would only show up at runtime, which could make it harder to debug. With TypeScript's type checking, we catch it early, making the code more reliable and preventing potential bugs.

This is how TypeScript helps improve code quality—by catching errors early, ensuring the code works as expected, and making it easier to fix issues.