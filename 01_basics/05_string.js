const name = "sadab"
const repoCount = 50

// console.log(name + repoCount+ "Value"); Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('SadabHussain')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Sadab  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sadab.com/sadab%20Sidd"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));  

console.log(gameName.split('--'));

// Just Do some other string Operation