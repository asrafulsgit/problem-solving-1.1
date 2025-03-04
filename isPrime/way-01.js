function isPrime(num){
     if(num <= 1) return false;
     if(num == 2) return true;
     if(num % 2 == 0) return false;

     for (let x = 3 ; x <= Math.floor(Math.sqrt(num)); x +=2){
          if(num % x == 0){
               return false;
          }
     }
     return true;
}
console.log(isPrime(11))