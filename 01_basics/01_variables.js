const accountId = 1991
let accountEmail = "test@gmail.com"
var accountPassword= "12345"
accounCity= "Dehradun"
let accountState;

/*
Perfer Not to use (Var)
because of issue in block scope and functional scope
*/

// accountId = 1 (Not allowed)

accountEmail = "deepak@gmail.com"
accountPassword = "9898"
accounCity = "kotdwar"


console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accounCity,accountState])