const user = {
    username: "Sadab",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Sadab"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sadab"
//     console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username = "sadab"
//     console.log(this);
// }

// chai()

// () => {} , Arrow function/fat arrow fucntion

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log((3 + 4));

// function with implicit return

// const addTwo = (num1, num2) =>  num1 + num2
// console.log((3 + 4));

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log((3 + 4));

// const addTwo = (num1, num2) => ({username: "Sadab"})
// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()