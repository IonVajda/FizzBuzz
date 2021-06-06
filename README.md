# FizzBuzz

### Step 1

Write a program that returns array of numbers from 1 to 100, while multiples of three return "Fizz" instead of the number, multiples of five return "Buzz". Multiples of both three and five return "FizzBuzz".

### Step 2

Add a way to change range, instead of printing numbers from 1 to 100. Examples: numbers from 1 to 20, from 15 to 50.

### Step 3

Add rules for 7 and 11: 7 returns "Foo", 11 returns "Boo" and multiples of both return "FooBoo".

### Step 4

Add new rule for numbers smaller than 16 which return "Small" and a rule for numbers bigger than 95 which return "Big".

### Step 5

Add ability to change rules for initial requirement, instead of "Fizz" (multiples of 3) return "Buzz", and instead of "Buzz" (multiples of 5) return "Fizz"

### Step 6

Add new rule for "multiples of 3 and 5" return "FTW", and for "multiples of 3 or 5" return "GG"

## Rules and Usage

1. Initialize this project with `npm` running `npm init`
2. Install and configure `Jest` as a testing library
3. To run the tests, run `npm run test`
4. Write the code following the **TDD** (Test Driven Development) approach

## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.
