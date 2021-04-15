//** Primitive types **/

let name = 'Linus'; // String Literal

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (e.g. 1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;
console.log(name);


//** Objects **/

let person = {
    name: 'Linus',
    age: 30
};

// Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

//** Arrays **/

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors)
console.log(selectedColors.length)


//** Others **/

let firstName1 = 'Scotty'
let lastName1 = 'Cena';
console.log(firstName1);

const interestRate = 0.3;
console.log(interestRate)


//** Functions **//

// Perfoming a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
    return number * number;
}

greet(name, lastName1);

let number = square(2);
console.log(number);

console.log('test')

console.log('test')