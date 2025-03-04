

// 145

function isStrong(num){
     let copyNumber = num;
     let sum = 0;
     while(num > 0){
          let rem = num % 10;
          let fact = 1;
          for(let x = 1; x <= rem ; x++){
               fact *= x ;
          }
          sum +=fact;
          num = Math.floor(num / 10)
     }

     if(copyNumber == sum){
          return 'its a strong number'
     }
     
     return 'its not a strong number'
}
console.log(isStrong(140))