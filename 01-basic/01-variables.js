const accountId = 12344444
let accountName = "Sunil Ghate"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState;

//Let console log the variables
console.log(accountId);

//Try to modify the values previously assigned
// accountId = 3456666
// console.log(accountId);

accountName = "derfff"
accountPassword = "frtttt"
accountCity = "sererere"

/**
 * Do not use var keyword to declare variables
 * Var is having issues with scopes 
 * block scope and function scope
 */

console.table([accountName, accountPassword,accountCity, accountState])