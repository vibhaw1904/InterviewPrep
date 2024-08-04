// let user={
//     name:"vibhaw"
// }
// let admin=user //copy the refrence
// admin.name="raj"
// console.log(user);

let a = {};
let b = a; // copy the reference

console.log();( a == b ); // true, both variables reference the same object
console.log();( a === b ); // true

let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  
  console.log(clone.name); // John
  console.log(clone.age); // 30

