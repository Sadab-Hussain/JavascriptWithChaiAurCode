function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, '4')

// console.log("Result:", result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Sadab");
    return  number1 + number2
    
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please Enter a User Name");
        return 
    }
    return `${username} just Logged in`
}
// console.log(loginUserMessage("Sadab"));
// console.log(loginUserMessage("sadab"));

function calculateCartPrice(...num1){
    return num1
    
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "SADAB",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

