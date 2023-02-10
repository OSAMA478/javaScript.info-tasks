// javascript.info (javascript fundamentals ---> 2.4 variables (total task #3)  )

// task #1
// Working with variables
// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
// let _admin;
// let _name;

// _name = "john";

// _admin = _name;
// alert(_admin);

// task #1
// Giving the r?ight name
// importance: 3
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let ourPlanet = "earth";
// let currentVisitor = "john";

// task #3
// Uppercase const?
// importance: 4
// Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?
// answer
// We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

// In this code, birthday is exactly like that. So we could use the upper case for it.

// In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.

// javascript.info (javascript fundamentals ---> 2.5 datatypes (total task #1)  )
// String quotes
// importance: 5;
// What is the output of the script?

// let $name = "Ilya";

// alert(`hello ${1}`); // ? --> hello 1

// alert(`hello ${"name"}`); // ? --> hello name

// alert(`hello ${$name}`); // ? --> hellow Ilya

// javascript.info (javascript fundamentals ---> 2.6 Interaction: alert, prompt, confirm (total task #1)  )

// A simple page
// importance: 4
// Create a web-page that asks for a name and outputs it.

// const userName = prompt("what is your name", "");
// alert("your name is " + userName);

// javascript.info (javascript fundamentals ---> 2.8 Basic operators, maths (total task #4)  )
// task #1
// The postfix and prefix forms
// importance: 5
// What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?
// answer
// a = 2
// b = 2
// c = 2
// d = 1

// task #2
// Assignment result
// importance: 3
// What are the values of a and x after the code below?

// let a = 2;

// let x = 1 + (a *= 2);
// answer a=4 x=5

// task #3
// Type conversions
// importance: 5
// What are results of these expressions?

// "" + 1 + 0 --> 10
// "" - 1 + 0 --> -1
// true + false --> 1
// 6 / "3" --> 2
// "2" * "3" --> 6
// 4 + 5 + "px" --> "9px"
// "$" + 4 + 5 --> "$45"
// "4" - 2 --> "2"
// "4px" - 2 --> NaN
// "  -9  " + 5 --> "  -9  5"
// "  -9  " - 5 --> "-14"
// null + 1 --> 1
// undefined + 1 --> NaN
// " \t \n" - 2 --> NaN
// Think well, write down and then compare with the answer.

// task #4
// Fix the addition
// importance: 5
// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12
//ANSWER --> // alert(+a + +b); // 3

// javascript.info (javascript fundamentals ---> 2.9 Comparisons (total task #1)  )
// Comparisons
// importance: 5
// What will be the result for these expressions?

// 5 > 4 -->  true
// "apple" > "pineapple" --> false
// "2" > "12" --> true
// undefined == null --> true
// undefined === null --> false
// null == "\n0\n" --> false
// null === +"\n0\n" --> false

// javascript.info (javascript fundamentals ---> 2.10 Conditional branching: if, '?' (total task #1)  )

// task #1
// if (a string with zero)
// importance: 5
// Will alert be shown?

// if ("0") {
//   alert( 'Hello' );
// }
// solution --> yes alert shown

// task #2
// The name of JavaScript
// importance: 2
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// Demo in new window

// solution -->
// let userInput = prompt("What is the “official” name of JavaScript?");

// if (userInput == "ECMAScript") alert("Right!");
// else alert("You don't know 'ECMAScript'!");
// task #3
// Show the sign
// importance: 2
// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

// Demo in new window

// solution -->
// const userInput = +prompt("write any number");

// if (userInput > 0) {
// 	alert( 1 );
// } else if (userInput < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }

// task #4
// Rewrite 'if' into '?'
// importance: 5
// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// solution
// answer
// let result;
// let a = 2;
// let b = 0;

// result = a + b < 4 ? "Below" : "Over";
// alert(result);

// task #5
// Rewrite 'if..else' into '?'
// importance: 5
// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// solution -->
// answer
// let message;
// const login = "Employee";

// message =
// 	login == "Employee"
// 		? "Hello"
// 		: login == "Director"
// 		? "Greetings"
// 		: login == ""
// 		? "No login"
// 		: "";

// console.log(message);

// javascript.info (javascript fundamentals ---> 2.11 Logical operator (total task #9))
// task #1
// What's the result of OR?
// importance: 5
// What is the code below going to output?

// alert( null || 2 || undefined ); --> //2

// // task # 2
// What's the result of OR'ed alerts?
// importance: 3
// What will the code below output?

// alert( alert(1) || 2 || alert(3) ); --> 1 , 2
//

// task # 3
// What is the result of AND?
// importance: 5
// What is this code going to show?

// alert( 1 && null && 2 ); --> null
//

// task # 4
// What is the result of AND'ed alerts?
// importance: 3
// What will this code show?

// alert( alert(1) && alert(2) ); --> 1, undefined
//

// task # 5
// The result of OR AND OR
// importance: 5
// What will the result be?

// alert( null || 2 && 3 || 4 ); --> 3
//

// task # 6
// Check the range between
// importance: 3
// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.
// answer
// const age = +prompt("what is your age", "");
// if (age >= 14 && age <= 90) {
// 	alert("the age is in between 14 and 90");
// }
// // task # 7
// Check the range outside
// importance: 3
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.
// const age = +prompt("what is your age", "");
// if (!(age >= 14 && age <= 90)) {
// 	alert("the age is in between 14 and 90");
// }

// // task # 8
// A question about "if"
// importance: 5
// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// answer  first ,third

// // task #9
// Check the login
// importance: 3
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!schema”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema:
// (schema which is inside the file)

// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

// Run the demo

const userType = prompt("who's there?", "");
let password;

if (userType == "Admin") {
	password = prompt("Password?", "");
	if (password == "TheMaster") {
		alert("Welcome!");
	} else if (password === "" || password === null) {
		alert("canceled");
	} else {
		alert("Wrong Password");
	}
} else if (userType === "" || userType === null) {
	alert("canceled");
} else {
	alert("I don't know you");
}
console.log(userType, typeof userType);
console.log(userType, typeof userType);
