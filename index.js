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



//** Others **/

let firstName1 = 'Scotty'
let lastName1 = 'Cena';
console.log(firstName1);

const interestRate = 0.3;
console.log(interestRate)

