// global scope
// var c = 300

let a = 300 

// block scope
if (true) {
    let a = 10 
    const b = 20 
    // console.log("Inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sadab"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()

if (true) {
    const username = "sadab"
    if (username === "sadab") {
        const websites = "youtube"
        // console.log(username + websites);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++ Intresting ++++++++++++++++++++

console.log(addone(5));

function  addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function (num){
    return num + 2
}

