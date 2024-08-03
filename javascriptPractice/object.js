
//task1
let user={
    name:"john",
    lastName:"smith",
}
user.name="Pete"
console.log(user);
delete user.name
console.log(user);

//task2

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

//task3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


  var sum=0;
  for(let key in salaries){
    sum+=salaries[key]
  }
  console.log(sum);


  //task4

  // before the call
let menu = {
    width: 200,
    height: 300,
    area:400,
    title: "My menu",
    name:"raj"
  };

  function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof(menu[key])=="number"){
            menu[key]*=2;
        }
    }
  }
  multiplyNumeric(menu)
  console.log(menu);
  