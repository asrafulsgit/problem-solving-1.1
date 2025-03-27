
// calculate unique value from a sorted array
let arr = [1,2,3,5,5,7,7,8,9,9]
let j = 1;
for (let i = 0; i < arr.length-1; i++) {
     if(arr[i] !== arr[i+1]){
          j++
     }
}
// console.log(j)


let arr1 = [1,3,4,5,7,6]
let arr2 = arr1.reduce((acc,cur)=> acc + cur , 0)
console.log(arr2)