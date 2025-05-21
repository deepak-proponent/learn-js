//+++++++++++++++ DATES ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();


let day = newDate.toLocaleString('default' , {
    weekday: "long",
    

});

console.log(day);



