# Blog Task 

### Q-4: What is the use of enums in TypeScript? Provide an example of a numeric and string enum. 

In TypeScript, an enum (full form: enumeration) is used to give names to a set of related values.
Enums make code easier to read, write, and maintain.


## Why Use Enums?

- Give names to fixed values.
- Avoid using "magic numbers" or "random strings" in code.
- Help prevent mistakes with invalid values.
- Make code easier to understand and safer.
  


## Example 1: Numeric Enum
```ts
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

let move = Direction.Left;
console.log(move); // Output: 2
```
- This is a numeric enum named Direction.
- It is used to represent 4 possible directions: Up, Down, Left, and Right.


## Example 2: String Enum
```ts
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

let current = Status.Success;
console.log(current); // Output: "SUCCESS"
```
- Each enum value is a string.
- Useful for readable messages.