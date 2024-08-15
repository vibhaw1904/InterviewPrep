function showPrime(n){
    for(let i=2;i<n;i++){
if(!isPrime(i)) continue
console.log("i is prime",i);;

    }
}
function isPrime(n){
for(let  i=0;i<n;i++){
    if(n%2===0) return false;
   
}
return true;
}
showPrime(10)