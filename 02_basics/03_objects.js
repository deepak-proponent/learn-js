// how to define Object

// #1 - singleton

// objet literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Deepak",
  "full name": "Deepak Rawat",
  [mySym]: "mykey1",
  age: 30,
  location: "dehradun",
  email: "riorawat@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sarurday"],
};

console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);


JsUser.email = "deepakraw@gmail.com"  //how to change value

Object.freeze(JsUser) // this is how you can block value

JsUser.email = "deepak@gmail.com"

console.log(JsUser);
