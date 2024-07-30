// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34466559669364n

// Reference (Non primitive)

//    Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myobj = {
    name:"sadab",
    age:18,
}

const myFunction = function(){
    console.log("Hello World..");
}

// for checking datatypes of any number => typeof
console.log(typeof scoreValue);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Type of val	            Result

// Undefined	            "undefined"
// Null	                    "object"
// Boolean	                "boolean"
// Number	                "number"
// String	                "string"
// Object (native and does not implement [[Call]])	        "object"
// Object (native or host and does implement [[Call]])	    "function"
// Object (host and does not implement [[Call]])	        Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// ***************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ComputerCodingCenter"
anothername = "CodeforAll"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo =  userOne

userTwo.email = "sadab@google.com"

console.log(userOne.email);
console.log(userOne.email);

