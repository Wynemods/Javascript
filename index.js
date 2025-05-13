function isPrime(number){
if (number <= 1) {
    return false;
  }
  let i=2;
  while(i*i<=number){
    if (number%i===0){
        return false;
    }
    i++;
  }

  return true;


}
console.log(isPrime(18)); // true
