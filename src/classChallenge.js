// ### ES6 Starter and Importing/Exporting
// - Generate a new es6-starter inside your 02-modules folder using the js-generate command
// - Name the project js-modules-challenge
// - Change into that newly created folder
// - Install the packages via the npm install command
// - Start your server after the packages are installed
// - Create a new file in your src folder called classChallenge.js
// - Inside the classChallenge.js file make a default export and two named exports
// ```
// default function needs to return `<div>classChallenge</div>`
// one of the named exports needs to be a variable that has a value of a string “welcome”
// one of the named exports needs to be a function that returns the sum of two numbers
// ```
// - Inside the bootstrap.js file I want you to import the classChallenge file and use the default function along with the two named exports


export default function () {
    return `<div>classChallenge</div>`
}

export const getGreetedSucka = "Welcome";

export function myFunc(x, y) {
    return x + y
}

console.log(myFunc(2, 4))