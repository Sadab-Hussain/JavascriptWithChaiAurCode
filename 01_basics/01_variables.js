const accountId = 144553
let accountEmail = "sadab@google.com"
var accountPassword = "12345"
accountCity = "Rajkot"

accountEmail = "abc@gmail.com"
accountPassword = "2122121"
accountCity = "Benguluru"
let accountState
/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// accountId =2  not allowed
console.log(accountId);