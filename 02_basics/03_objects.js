// signleton 
// object.create

// object literals 

const mySym = Symbol("key1")

const jsUser = {
    name: "sadab",
    "full name": "Sadab Hussain",
    [mySym]: "mykey1",
    age: 18,
    location: "Rajkot",
    email: "sadab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "sadab@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "sadab@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
