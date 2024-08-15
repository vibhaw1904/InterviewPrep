// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }
///task1
function checkAge(age) {
  return age > 18 ? true : console.log("Did parents allow you?");
}
checkAge(12);

//   task2
function min(a, b) {
  return a > b ? console.log(b) : console.log(a);
}
min(6, 8);
min(10, 2);

//task3

function pow(x, n) {
  let ans = x;
  if(n==0 )ans=1;
  for (let i = 1; i < n; i++) {
    ans = ans * x;
  }
  console.log(ans);
}

pow(3, 3);
